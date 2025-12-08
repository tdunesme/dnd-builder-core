import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { PrismaService } from '../prisma/prisma.service';
import { Character } from '../generated/prisma/client';

describe('CharactersService', () => {
  let service: CharactersService;
  let prisma: jest.Mocked<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharactersService,
        {
          provide: PrismaService,
          useValue: {
            character: {
              create: jest.fn(),
              findMany: jest.fn(),
              findFirst: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<CharactersService>(CharactersService);
    prisma = module.get(PrismaService);
  });

  describe('create', () => {
    it('devrait créer un personnage niveau 1 par défaut si level non fourni', async () => {
      const ownerId = 'user-123';
      const dto: any = { name: 'Aragorn' };

      const createdCharacter: Character = {
        id: 1,
        name: 'Aragorn',
        level: 1,
        ownerId,
        speciesId: null,
        classId: null,
        backgroundId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prisma.character.create as jest.Mock).mockResolvedValue(
        createdCharacter,
      );

      const result = await service.create(ownerId, dto);

      expect(prisma.character.create).toHaveBeenCalledWith({
        data: {
          name: 'Aragorn',
          level: 1,
          ownerId,
        },
      });

      expect(result).toEqual(createdCharacter);
    });

    it('devrait respecter un niveau explicite si fourni dans le DTO', async () => {
      const ownerId = 'user-123';
      const dto: any = { name: 'Gandalf', level: 3 };

      const createdCharacter: Character = {
        id: 2,
        name: 'Gandalf',
        level: 3,
        ownerId,
        speciesId: null,
        classId: null,
        backgroundId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prisma.character.create as jest.Mock).mockResolvedValue(
        createdCharacter,
      );

      const result = await service.create(ownerId, dto);

      expect(prisma.character.create).toHaveBeenCalledWith({
        data: {
          name: 'Gandalf',
          level: 3,
          ownerId,
        },
      });

      expect(result.level).toBe(3);
      expect(result).toEqual(createdCharacter);
    });
  });

  describe('findAllForUser', () => {
    it('devrait renvoyer uniquement les personnages du user', async () => {
      const ownerId = 'user-123';

      const characters: Character[] = [
        {
          id: 1,
          name: 'Aragorn',
          level: 1,
          ownerId,
          speciesId: null,
          classId: null,
          backgroundId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Legolas',
          level: 1,
          ownerId,
          speciesId: null,
          classId: null,
          backgroundId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      (prisma.character.findMany as jest.Mock).mockResolvedValue(characters);

      const result = await service.findAllForUser(ownerId);

      expect(prisma.character.findMany).toHaveBeenCalledWith({
        where: { ownerId },
      });

      expect(result).toEqual(characters);
    });
  });

  describe('findOneForUser', () => {
    it('devrait renvoyer le personnage s’il appartient au user', async () => {
      const ownerId = 'user-123';
      const characterId = 10;

      const character: Character = {
        id: characterId,
        name: 'Gimli',
        level: 1,
        ownerId,
        speciesId: null,
        classId: null,
        backgroundId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prisma.character.findFirst as jest.Mock).mockResolvedValue(character);

      const result = await service.findOneForUser(ownerId, characterId);

      expect(prisma.character.findFirst).toHaveBeenCalledWith({
        where: {
          id: characterId,
          ownerId,
        },
      });

      expect(result).toEqual(character);
    });

    it("devrait lever NotFoundException si le personnage n'existe pas ou n'appartient pas au user", async () => {
      const ownerId = 'user-123';
      const characterId = 999;

      (prisma.character.findFirst as jest.Mock).mockResolvedValue(null);

      await expect(
        service.findOneForUser(ownerId, characterId),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });

  describe('removeForUser', () => {
    it('devrait supprimer un personnage appartenant au user', async () => {
      const ownerId = 'user-123';
      const characterId = 5;

      const existing: Character = {
        id: characterId,
        name: 'Boromir',
        level: 1,
        ownerId,
        speciesId: null,
        classId: null,
        backgroundId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const deleted: Character = { ...existing };

      (prisma.character.findFirst as jest.Mock).mockResolvedValue(existing);
      (prisma.character.delete as jest.Mock).mockResolvedValue(deleted);

      const result = await service.removeForUser(ownerId, characterId);

      expect(prisma.character.findFirst).toHaveBeenCalledWith({
        where: {
          id: characterId,
          ownerId,
        },
      });

      expect(prisma.character.delete).toHaveBeenCalledWith({
        where: { id: characterId },
      });

      expect(result).toEqual(deleted);
    });

    it("devrait lever NotFoundException si le personnage n'appartient pas au user", async () => {
      const ownerId = 'user-123';
      const characterId = 5;

      (prisma.character.findFirst as jest.Mock).mockResolvedValue(null);

      await expect(
        service.removeForUser(ownerId, characterId),
      ).rejects.toBeInstanceOf(NotFoundException);

      expect(prisma.character.delete).not.toHaveBeenCalled();
    });
  });
});
