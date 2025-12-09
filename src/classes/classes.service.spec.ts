import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClassesService } from './classes.service';

describe('ClassesService', () => {
  let service: ClassesService;
  let prisma: jest.Mocked<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassesService,
        {
          provide: PrismaService,
          useValue: {
            class: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ClassesService>(ClassesService);
    prisma = module.get(PrismaService);
  });

  it('devrait retourner toutes les classes', async () => {
    (prisma.class.findMany as jest.Mock).mockResolvedValue([
      {
        id: 1,
        key: 'barbarian',
        name: 'Barbarian',
        hitDie: 12,
        primaryAbilities: ['Strength'],
        savingThrows: ['Strength', 'Constitution'],
        armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
        weaponProficiencies: ['Simple weapons', 'Martial weapons'],
        toolProficiencies: [],
        skillChoices: { choose: 2, from: ['Athletics', 'Intimidation'] },
        equipmentOptions: {},
        hasSpellcasting: false,
        spellcastingType: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const result = await service.findAll();

    expect(prisma.class.findMany).toHaveBeenCalledWith({
      orderBy: { id: 'asc' },
    });
    expect(result).toHaveLength(1);
    expect(result[0].key).toBe('barbarian');
  });

  it('devrait retourner une classe par id', async () => {
    (prisma.class.findUnique as jest.Mock).mockResolvedValue({
      id: 2,
      key: 'wizard',
      name: 'Wizard',
      hitDie: 6,
      primaryAbilities: ['Intelligence'],
      savingThrows: ['Intelligence', 'Wisdom'],
      armorProficiencies: [],
      weaponProficiencies: ['Daggers', 'Quarterstaffs'],
      toolProficiencies: [],
      skillChoices: { choose: 2, from: ['Arcana', 'History'] },
      equipmentOptions: {},
      hasSpellcasting: true,
      spellcastingType: 'full',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const result = await service.findOne(2);

    expect(prisma.class.findUnique).toHaveBeenCalledWith({
      where: { id: 2 },
    });
    expect(result.name).toBe('Wizard');
  });

  it("devrait lever NotFoundException si l'id n'existe pas", async () => {
    (prisma.class.findUnique as jest.Mock).mockResolvedValue(null);

    await expect(service.findOne(999)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
