import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SpeciesService } from './species.service';

describe('SpeciesService', () => {
  let service: SpeciesService;
  let prisma: jest.Mocked<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpeciesService,
        {
          provide: PrismaService,
          useValue: {
            species: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<SpeciesService>(SpeciesService);
    prisma = module.get(PrismaService);
  });

  it('devrait retourner toutes les species', async () => {
    (prisma.species.findMany as jest.Mock).mockResolvedValue([
      {
        id: 1,
        key: 'dragonborn',
        name: 'Dragonborn',
        creatureType: 'Humanoid',
        size: 'Medium',
        speed: 30,
        sizeOptions: null,
        traits: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const result = await service.findAll();

    expect(prisma.species.findMany).toHaveBeenCalledWith({
      orderBy: { id: 'asc' },
    });
    expect(result).toHaveLength(1);
    expect(result[0].key).toBe('dragonborn');
  });

  it('devrait retourner une species par id', async () => {
    (prisma.species.findUnique as jest.Mock).mockResolvedValue({
      id: 2,
      key: 'dwarf',
      name: 'Dwarf',
      creatureType: 'Humanoid',
      size: 'Medium',
      speed: 30,
      sizeOptions: null,
      traits: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const result = await service.findOne(2);

    expect(prisma.species.findUnique).toHaveBeenCalledWith({
      where: { id: 2 },
    });
    expect(result.name).toBe('Dwarf');
  });

  it("devrait lever NotFoundException si l'id n'existe pas", async () => {
    (prisma.species.findUnique as jest.Mock).mockResolvedValue(null);

    await expect(service.findOne(999)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
