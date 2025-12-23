import { Injectable } from '@nestjs/common';
import { Prisma, Character } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

export type CharacterWithRelations = Prisma.CharacterGetPayload<{
  include: {
    skills: true;
    proficiencies: true;
    languages: true;
    spells: true;
    equipment: true;
  };
}>;

@Injectable()
export class CharactersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    userId: string,
    dto: CreateCharacterDto,
  ): Promise<CharacterWithRelations> {
    return this.prisma.character.create({
      data: {
        userId,
        name: dto.name,
        level: dto.level ?? 1,

        raceIndex: dto.raceIndex,
        subraceIndex: dto.subraceIndex,
        classIndex: dto.classIndex,
        subclassIndex: dto.subclassIndex,
        backgroundIndex: dto.backgroundIndex,
        alignmentIndex: dto.alignmentIndex,

        strength: dto.strength,
        dexterity: dto.dexterity,
        constitution: dto.constitution,
        intelligence: dto.intelligence,
        wisdom: dto.wisdom,
        charisma: dto.charisma,

        skills: dto.skillIndexes
          ? { create: dto.skillIndexes.map((skillIndex) => ({ skillIndex })) }
          : { create: [] },

        proficiencies: dto.proficiencyIndexes
          ? {
              create: dto.proficiencyIndexes.map((proficiencyIndex) => ({
                proficiencyIndex,
              })),
            }
          : { create: [] },

        languages: dto.languageIndexes
          ? {
              create: dto.languageIndexes.map((languageIndex) => ({
                languageIndex,
              })),
            }
          : { create: [] },

        spells: dto.spellIndexes
          ? { create: dto.spellIndexes.map((spellIndex) => ({ spellIndex })) }
          : { create: [] },

        equipment: dto.equipmentIndexes
          ? {
              create: dto.equipmentIndexes.map((equipmentIndex) => ({
                equipmentIndex,
              })),
            }
          : { create: [] },
      },
      include: {
        skills: true,
        proficiencies: true,
        languages: true,
        spells: true,
        equipment: true,
      },
    });
  }

  async update(
    userId: string,
    characterId: string,
    dto: UpdateCharacterDto,
  ): Promise<Character> {
    const data: Prisma.CharacterUpdateInput = {
      name: dto.name,
      level: dto.level,

      raceIndex: dto.raceIndex,
      subraceIndex: dto.subraceIndex,
      classIndex: dto.classIndex,
      subclassIndex: dto.subclassIndex,
      backgroundIndex: dto.backgroundIndex,
      alignmentIndex: dto.alignmentIndex,

      strength: dto.strength,
      dexterity: dto.dexterity,
      constitution: dto.constitution,
      intelligence: dto.intelligence,
      wisdom: dto.wisdom,
      charisma: dto.charisma,
    };

    if (dto.skillIndexes !== undefined) {
      data.skills = {
        deleteMany: {},
        create: dto.skillIndexes.map((skillIndex) => ({ skillIndex })),
      };
    }

    if (dto.proficiencyIndexes !== undefined) {
      data.proficiencies = {
        deleteMany: {},
        create: dto.proficiencyIndexes.map((proficiencyIndex) => ({
          proficiencyIndex,
        })),
      };
    }

    if (dto.languageIndexes !== undefined) {
      data.languages = {
        deleteMany: {},
        create: dto.languageIndexes.map((languageIndex) => ({ languageIndex })),
      };
    }

    if (dto.spellIndexes !== undefined) {
      data.spells = {
        deleteMany: {},
        create: dto.spellIndexes.map((spellIndex) => ({ spellIndex })),
      };
    }

    if (dto.equipmentIndexes !== undefined) {
      data.equipment = {
        deleteMany: {},
        create: dto.equipmentIndexes.map((equipmentIndex) => ({
          equipmentIndex,
        })),
      };
    }

    return this.prisma.character.update({
      where: { id: characterId, userId },
      data,
    });
  }

  async findAllForUser(userId: string): Promise<Character[]> {
    return this.prisma.character.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(
    userId: string,
    characterId: string,
  ): Promise<CharacterWithRelations> {
    return this.prisma.character.findFirstOrThrow({
      where: { id: characterId, userId },
      include: {
        skills: true,
        proficiencies: true,
        languages: true,
        spells: true,
        equipment: true,
      },
    });
  }

  async delete(userId: string, characterId: string): Promise<void> {
    await this.prisma.character.delete({
      where: { id: characterId, userId },
    });
  }
}
