import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SpeciesDto } from './dto/species.dto';

@Injectable()
export class SpeciesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<SpeciesDto[]> {
    const species = await this.prisma.species.findMany({
      orderBy: { id: 'asc' },
    });

    return species.map((s) => this.toDto(s));
  }

  async findOneByKey(key: string): Promise<SpeciesDto> {
    const species = await this.prisma.species.findUnique({
      where: { key },
    });

    if (!species) {
      throw new NotFoundException('Species not found');
    }

    return this.toDto(species);
  }

  private toDto(entity: any): SpeciesDto {
    return {
      id: entity.id,
      key: entity.key,
      name: entity.name,
      description: entity.description,
      creatureType: entity.creatureType,
      size: entity.size,
      speed: entity.speed,
      sizeOptions: entity.sizeOptions ?? undefined,
      traits: entity.traits ?? undefined,
    };
  }
}
