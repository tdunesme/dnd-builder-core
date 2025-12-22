import { Test, TestingModule } from '@nestjs/testing';
import { CharactersService } from './characters.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('CharactersService', () => {
  let service: CharactersService;

  const prismaMock = {
    character: {
      create: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharactersService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get(CharactersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a character shell', async () => {
      prismaMock.character.create.mockResolvedValue({
        id: 'char-1',
        name: 'Gandalf',
        userId: 'user-1',
        createdAt: new Date(),
        updatedAt: new Date(),
        level: 1,
      });

      const result = await service.create('user-1', { name: 'Gandalf' });

      expect(prismaMock.character.create).toHaveBeenCalledWith({
        data: {
          name: 'Gandalf',
          userId: 'user-1',
        },
      });

      expect(result.name).toBe('Gandalf');
    });
  });

  describe('update', () => {
    it('should update a character if owned by user', async () => {
      prismaMock.character.findFirst.mockResolvedValue({
        id: 'char-1',
        userId: 'user-1',
        name: 'Original',
        createdAt: new Date(),
        updatedAt: new Date(),
        level: 1,
      });

      prismaMock.character.update.mockResolvedValue({
        id: 'char-1',
        name: 'Updated',
        userId: 'user-1',
        createdAt: new Date(),
        updatedAt: new Date(),
        level: 1,
      });

      const result = await service.update('user-1', 'char-1', {
        name: 'Updated',
      });

      expect(result.name).toBe('Updated');
    });

    it('should throw NotFoundException if character does not exist', async () => {
      prismaMock.character.findFirst.mockResolvedValue(null);

      await expect(
        service.update('user-1', 'char-404', { name: 'Fail' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('findAllForUser', () => {
    it('should return characters for user', async () => {
      prismaMock.character.findMany.mockResolvedValue([
        {
          id: 'c1',
          name: 'A',
          userId: 'user-1',
          createdAt: new Date(),
          updatedAt: new Date(),
          level: 1,
        },
        {
          id: 'c2',
          name: 'B',
          userId: 'user-1',
          createdAt: new Date(),
          updatedAt: new Date(),
          level: 1,
        },
      ]);

      const result = await service.findAllForUser('user-1');

      expect(result).toHaveLength(2);
      expect(prismaMock.character.findMany).toHaveBeenCalledWith({
        where: { userId: 'user-1' },
        orderBy: { updatedAt: 'desc' },
      });
    });
  });
});
