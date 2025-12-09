import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClassDto } from './dto/class.dto';

@Injectable()
export class ClassesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ClassDto[]> {
    const classes = await this.prisma.class.findMany({
      orderBy: { id: 'asc' },
    });

    return classes.map((c) => this.toDto(c));
  }

  async findOne(id: number): Promise<ClassDto> {
    const classEntity = await this.prisma.class.findUnique({
      where: { id },
    });

    if (!classEntity) {
      throw new NotFoundException('Class not found');
    }

    return this.toDto(classEntity);
  }

  // Petit helper privé pour mapper l’entity Prisma -> DTO
  private toDto(entity: any): ClassDto {
    return {
      id: entity.id,
      key: entity.key,
      name: entity.name,
      hitDie: entity.hitDie,
      primaryAbilities: entity.primaryAbilities ?? [],
      savingThrows: entity.savingThrows ?? [],
      armorProficiencies: entity.armorProficiencies ?? [],
      weaponProficiencies: entity.weaponProficiencies ?? [],
      toolProficiencies: entity.toolProficiencies ?? [],
      skillChoices: entity.skillChoices ?? null,
      equipmentOptions: entity.equipmentOptions ?? null,
      hasSpellcasting: entity.hasSpellcasting,
      spellcastingType: entity.spellcastingType ?? null,
    };
  }
}
