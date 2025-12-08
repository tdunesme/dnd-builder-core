// src/characters/characters.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { AuthGuard } from '@nestjs/passport';

// Mock les méthodes du controller pour simuler le comportement du décorateur @User()
// En production, le décorateur extrait user de req.user via ExecutionContext
// Dans les tests unitaires, on mock les méthodes pour permettre de passer le user directement
describe('CharactersController', () => {
  let controller: CharactersController;
  let service: jest.Mocked<CharactersService>;

  beforeEach(async () => {
    const serviceMock: Partial<jest.Mocked<CharactersService>> = {
      create: jest.fn(),
      findAllForUser: jest.fn(),
      findOneForUser: jest.fn(),
      removeForUser: jest.fn(),
    };

    // Mock du guard pour éviter les erreurs
    const mockAuthGuard = {
      canActivate: jest.fn().mockReturnValue(true),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        {
          provide: CharactersService,
          useValue: serviceMock,
        },
      ],
    })
      .overrideGuard(AuthGuard('jwt'))
      .useValue(mockAuthGuard)
      .compile();

    controller = module.get<CharactersController>(CharactersController);
    service = module.get(CharactersService);
  });

  describe('create', () => {
    it('devrait créer un personnage pour le user authentifié', async () => {
      const req = {
        user: { userId: '42', email: 'test@example.com' },
      } as any;
      const dto: any = { name: 'Aragorn' };

      const created = {
        id: 1,
        name: 'Aragorn',
        level: 1,
        ownerId: '42',
      } as any;

      service.create.mockResolvedValue(created);

      const result = await controller.create(req, dto);

      expect(service.create).toHaveBeenCalledWith('42', dto);
      expect(result).toEqual(created);
    });
  });

  describe('findAll', () => {
    it('devrait renvoyer les personnages du user authentifié', async () => {
      const req = {
        user: { userId: '42', email: 'test@example.com' },
      } as any;

      const characters = [
        { id: 1, name: 'Aragorn', level: 1, ownerId: '42' },
      ] as any[];

      service.findAllForUser.mockResolvedValue(characters);

      const result = await controller.findAll(req);

      expect(service.findAllForUser).toHaveBeenCalledWith('42');
      expect(result).toEqual(characters);
    });
  });

  describe('findOne', () => {
    it('devrait renvoyer un personnage du user authentifié', async () => {
      const req = {
        user: { userId: '42', email: 'test@example.com' },
      } as any;
      const characterId = 10; // ParseIntPipe convertit la string en number

      const character = {
        id: 10,
        name: 'Gimli',
        level: 1,
        ownerId: '42',
      } as any;

      service.findOneForUser.mockResolvedValue(character);

      const result = await controller.findOne(req, characterId);

      expect(service.findOneForUser).toHaveBeenCalledWith('42', 10);
      expect(result).toEqual(character);
    });
  });

  describe('remove', () => {
    it('devrait supprimer un personnage du user authentifié', async () => {
      const req = {
        user: { userId: '42', email: 'test@example.com' },
      } as any;
      const characterId = 5; // ParseIntPipe convertit la string en number

      const deleted = {
        id: 5,
        name: 'Boromir',
        level: 1,
        ownerId: '42',
      } as any;

      service.removeForUser.mockResolvedValue(deleted);

      const result = await controller.remove(req, characterId);

      expect(service.removeForUser).toHaveBeenCalledWith('42', 5);
      expect(result).toEqual(deleted);
    });
  });
});
