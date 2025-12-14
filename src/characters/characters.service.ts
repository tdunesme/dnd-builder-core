import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Character, Prisma } from '../generated/prisma/client';
import { CreateCharacterDto } from './dto/createCharacter.dto';
import { UpdateCharacterDto } from './dto/createCharacter.dto';
import { CharacterStatus } from '../generated/prisma/enums';

@Injectable()
export class CharactersService {
  constructor(private readonly prisma: PrismaService) {}

  async createDraft(
    userId: string,
    dto: CreateCharacterDto,
  ): Promise<Character> {
    return this.prisma.character.create({
      data: {
        userId,
        name: dto.name ?? null,
        status: CharacterStatus.DRAFT,
        level: 1,
      },
    });
  }

  async findOne(id: string, userId: string): Promise<Character> {
    const character = await this.prisma.character.findUnique({
      where: { id },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    if (character.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    return character;
  }

  async update(
    id: string,
    userId: string,
    dto: UpdateCharacterDto,
  ): Promise<Character> {
    const character = await this.findOne(id, userId);

    if (character.status === CharacterStatus.ACTIVE) {
      throw new ForbiddenException('Active characters cannot be edited');
    }

    const updateData: Prisma.CharacterUpdateInput = {};

    if (dto.name !== undefined) updateData.name = dto.name;
    if (dto.level !== undefined) updateData.level = dto.level;
    if (dto.speciesKey !== undefined) updateData.speciesKey = dto.speciesKey;
    if (dto.classKey !== undefined) updateData.classKey = dto.classKey;
    if (dto.backgroundKey !== undefined)
      updateData.backgroundKey = dto.backgroundKey;
    if (dto.abilityScores !== undefined)
      updateData.abilityScores = dto.abilityScores as Prisma.InputJsonValue;
    if (dto.abilityMethod !== undefined)
      updateData.abilityMethod = dto.abilityMethod;
    if (dto.equipment !== undefined)
      updateData.equipment = dto.equipment as Prisma.InputJsonValue;
    if (dto.spells !== undefined)
      updateData.spells = dto.spells as Prisma.InputJsonValue;
    if (dto.notes !== undefined)
      updateData.notes = dto.notes as Prisma.InputJsonValue;

    return this.prisma.character.update({
      where: { id },
      data: updateData,
    });
  }

  async activate(id: string, userId: string): Promise<Character> {
    const character = await this.findOne(id, userId);

    if (character.status === CharacterStatus.ACTIVE) {
      return character;
    }

    return this.prisma.character.update({
      where: { id },
      data: {
        status: CharacterStatus.ACTIVE,
      },
    });
  }
}
