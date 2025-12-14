import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SpellDto, SpellLightDto } from './dto/spells.dto';

@Injectable()
export class SpellsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<SpellLightDto[]> {
    const spells = await this.prisma.spell.findMany();
    return spells.map((spell) => this.toLightDto(spell));
  }

  async findOne(key: string): Promise<SpellDto> {
    const spell = await this.prisma.spell.findUnique({
      where: { key },
    });
    return this.toDto(spell);
  }

  private toLightDto(entity: any): SpellLightDto {
    return {
      id: entity.id,
      key: entity.key,
      name: entity.name,
      level: entity.level,
      school: entity.school,
      range: entity.range,
      components: entity.components,
    };
  }

  private toDto(entity: any): SpellDto {
    return {
      id: entity.id,
      key: entity.key,
      name: entity.name,
      level: entity.level,
      school: entity.school,
      source: entity.source,
      castingTime: entity.castingTime,
      range: entity.range,
      components: entity.components,
      duration: entity.duration,
      classes: entity.classes,
      description: entity.description,
      atHigherLevels: entity.atHigherLevels,
    };
  }
}
