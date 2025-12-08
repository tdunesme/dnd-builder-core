import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

describe('Characters E2E', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let jwt: string;
  const testEmail = 'test@example.com';
  const testPassword = 'testPassword123';

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );

    await app.init();

    prisma = app.get(PrismaService);

    // Clean DB avant les tests
    await prisma.character.deleteMany();
    await prisma.user.deleteMany();

    // Crée un user de test avec un vrai hash
    const passwordHash = await bcrypt.hash(testPassword, 10);
    await prisma.user.create({
      data: {
        email: testEmail,
        passwordHash,
      },
    });

    // Récupère un JWT via l'endpoint d'auth
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: testEmail,
        password: testPassword,
      })
      .expect(201);

    jwt = loginResponse.body.accessToken;
  });

  afterAll(async () => {
    // Clean DB après les tests
    await prisma.character.deleteMany();
    await prisma.user.deleteMany();
    await app.close();
  });

  describe('/characters (POST)', () => {
    it('devrait créer un personnage pour le user authentifié', async () => {
      const res = await request(app.getHttpServer())
        .post('/characters')
        .set('Authorization', `Bearer ${jwt}`)
        .send({
          name: 'Aragorn',
          level: 1,
        })
        .expect(201);

      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe('Aragorn');
      expect(res.body.level).toBe(1);
      expect(res.body).toHaveProperty('ownerId');
    });

    it('devrait créer un personnage niveau 1 par défaut si level non fourni', async () => {
      const res = await request(app.getHttpServer())
        .post('/characters')
        .set('Authorization', `Bearer ${jwt}`)
        .send({
          name: 'Legolas',
        })
        .expect(201);

      expect(res.body.level).toBe(1);
    });

    it('devrait refuser sans JWT', async () => {
      await request(app.getHttpServer())
        .post('/characters')
        .send({ name: 'Sans Auth' })
        .expect(401);
    });
  });

  describe('/characters (GET)', () => {
    it('devrait renvoyer les personnages du user connecté', async () => {
      // Crée d'abord un personnage
      await request(app.getHttpServer())
        .post('/characters')
        .set('Authorization', `Bearer ${jwt}`)
        .send({ name: 'Gandalf' })
        .expect(201);

      const res = await request(app.getHttpServer())
        .get('/characters')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);

      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty('name');
    });
  });

  describe('/characters/:id (GET)', () => {
    it('devrait renvoyer un personnage existant du user', async () => {
      // Crée un personnage
      const created = await request(app.getHttpServer())
        .post('/characters')
        .set('Authorization', `Bearer ${jwt}`)
        .send({ name: 'Gimli' })
        .expect(201);

      const id = created.body.id;

      const res = await request(app.getHttpServer())
        .get(`/characters/${id}`)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);

      expect(res.body.id).toBe(id);
      expect(res.body.name).toBe('Gimli');
    });

    it('devrait retourner 404 pour un personnage inexistant', async () => {
      await request(app.getHttpServer())
        .get('/characters/99999')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(404);
    });
  });

  describe('/characters/:id (DELETE)', () => {
    it('devrait supprimer un personnage existant du user', async () => {
      const created = await request(app.getHttpServer())
        .post('/characters')
        .set('Authorization', `Bearer ${jwt}`)
        .send({ name: 'Boromir' })
        .expect(201);

      const id = created.body.id;

      await request(app.getHttpServer())
        .delete(`/characters/${id}`)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);

      await request(app.getHttpServer())
        .get(`/characters/${id}`)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(404);
    });
  });
});
