// src/characters/characters.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

interface AuthenticatedRequest {
  user: {
    userId: string;
    email: string;
  };
}

describe('CharactersController', () => {
  let controller: CharactersController;
  let service: {
    create: jest.Mock;
    findAllForUser: jest.Mock;
    findOneForUser: jest.Mock;
    removeForUser: jest.Mock;
  };

  beforeEach(async () => {
    const serviceMock = {
      create: jest.fn(),
      findAllForUser: jest.fn(),
      findOneForUser: jest.fn(),
      removeForUser: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        {
          provide: CharactersService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get<CharactersController>(CharactersController);
    service = serviceMock;
  });

  const makeReq = (userId: string = 'user-123'): AuthenticatedRequest => ({
    user: {
      userId,
      email: 'test@example.com',
    },
  });

  describe('create', () => {
    it('devrait créer un personnage pour le user authentifié', async () => {
      const req = makeReq('user-123');
      const dto: any = { name: 'Aragorn', level: 1 };

      const created = {
        id: 1,
        name: 'Aragorn',
        level: 1,
        ownerId: 'user-123',
      } as any;

      service.create.mockResolvedValue(created);

      const result = await controller.create(req as any, dto);

      expect(service.create).toHaveBeenCalledWith('user-123', dto);
      expect(result).toEqual(created);
    });
  });

  describe('findAll', () => {
    it('devrait appeler findAllForUser avec le bon userId', async () => {
      const req = makeReq('user-123');

      const characters = [
        { id: 1, name: 'A', level: 1, ownerId: 'user-123' },
      ] as any[];

      service.findAllForUser.mockResolvedValue(characters);

      const result = await controller.findAll(req as any);

      expect(service.findAllForUser).toHaveBeenCalledWith('user-123');
      expect(result).toEqual(characters);
    });
  });

  describe('findOne', () => {
    it('devrait parser id en nombre et appeler findOneForUser', async () => {
      const req = makeReq('user-123');
      const characterId = 10; // ParseIntPipe convertit la string en number

      const character = {
        id: 10,
        name: 'Gimli',
        level: 1,
        ownerId: 'user-123',
      } as any;

      service.findOneForUser.mockResolvedValue(character);

      const result = await controller.findOne(req as any, characterId);

      expect(service.findOneForUser).toHaveBeenCalledWith('user-123', 10);
      expect(result).toEqual(character);
    });
  });

  describe('remove', () => {
    it('devrait parser id en nombre et appeler removeForUser', async () => {
      const req = makeReq('user-123');
      const characterId = 5; // ParseIntPipe convertit la string en number

      const deleted = {
        id: 5,
        name: 'Boromir',
        level: 1,
        ownerId: 'user-123',
      } as any;

      service.removeForUser.mockResolvedValue(deleted);

      const result = await controller.remove(req as any, characterId);

      expect(service.removeForUser).toHaveBeenCalledWith('user-123', 5);
      expect(result).toEqual(deleted);
    });
  });
});
