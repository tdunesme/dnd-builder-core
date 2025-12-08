import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('Auth + Characters E2E', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let accessToken: string;

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

    // Reset DB avant les tests
    await prisma.character.deleteMany();
    await prisma.user.deleteMany();

    // 1. Register
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: 'test@example.com',
        password: 'secret123',
      })
      .expect(201);

    // 2. Login
    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test@example.com',
        password: 'secret123',
      })
      .expect(201);

    expect(loginRes.body).toHaveProperty('accessToken');
    accessToken = loginRes.body.accessToken;
  });

  afterAll(async () => {
    // Clean DB après les tests
    await prisma.character.deleteMany();
    await prisma.user.deleteMany();
    await app.close();
  });

  // CREATE CHARACTER
  it('should create a character', async () => {
    const res = await request(app.getHttpServer())
      .post('/characters')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'Aragorn',
      })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Aragorn');
    expect(res.body.level).toBe(1);
  });

  // LIST CHARACTERS
  it('should list characters for this user', async () => {
    const res = await request(app.getHttpServer())
      .get('/characters')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // GET CHARACTER BY ID
  it('should get a character by id', async () => {
    const create = await request(app.getHttpServer())
      .post('/characters')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'Legolas',
      })
      .expect(201);

    const id = create.body.id;

    const res = await request(app.getHttpServer())
      .get(`/characters/${id}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(res.body.id).toBe(id);
    expect(res.body.name).toBe('Legolas');
  });

  // DELETE CHARACTER
  it('should delete a character', async () => {
    const create = await request(app.getHttpServer())
      .post('/characters')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'Boromir',
      })
      .expect(201);

    const id = create.body.id;

    await request(app.getHttpServer())
      .delete(`/characters/${id}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    await request(app.getHttpServer())
      .get(`/characters/${id}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(404);
  });
});
