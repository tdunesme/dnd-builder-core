import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from 'src/generated/prisma/client';

@Injectable()
export class CharactersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateCharacterDto): Promise<Character> {
    return await this.prisma.character.create({
      data: {
        name: dto.name,
        userId,
      },
    });
  }

  async update(
    userId: string,
    characterId: string,
    dto: UpdateCharacterDto,
  ): Promise<Character> {
    const character = await this.prisma.character.findFirst({
      where: { id: characterId, userId },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    return this.prisma.character.update({
      where: { id: characterId },
      data: {
        name: dto.name,
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
      },
    });
  }

  async findAllForUser(userId: string): Promise<Character[]> {
    return await this.prisma.character.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
    });
  }
}
