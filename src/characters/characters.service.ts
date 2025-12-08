import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCharacterDto } from './dto/createCharacter.dto';
import { Character, Prisma } from '../generated/prisma/client';

@Injectable()
export class CharactersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(ownerId: string, dto: CreateCharacterDto): Promise<Character> {
    const data: Prisma.CharacterUncheckedCreateInput = {
      name: dto.name,
      level: dto.level ?? 1,
      ownerId,
    };

    return await this.prisma.character.create({ data });
  }

  async findAllForUser(ownerId: string): Promise<Character[]> {
    return await this.prisma.character.findMany({
      where: { ownerId },
    });
  }

  async findOneForUser(
    ownerId: string,
    characterId: number,
  ): Promise<Character> {
    const character = await this.prisma.character.findFirst({
      where: {
        id: characterId,
        ownerId,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    return character;
  }

  async removeForUser(
    ownerId: string,
    characterId: number,
  ): Promise<Character> {
    const existing = await this.prisma.character.findFirst({
      where: {
        id: characterId,
        ownerId,
      },
    });

    if (!existing) {
      throw new NotFoundException('Character not found');
    }

    const deleted = await this.prisma.character.delete({
      where: { id: characterId },
    });

    return deleted;
  }
}
