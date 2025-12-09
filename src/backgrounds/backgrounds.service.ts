import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BackgroundDto } from './dto/background.dto';

@Injectable()
export class BackgroundsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<BackgroundDto[]> {
    const backgrounds = await this.prisma.background.findMany({
      orderBy: { id: 'asc' },
    });

    return backgrounds.map((b) => this.toDto(b));
  }

  async findOne(id: number): Promise<BackgroundDto> {
    const background = await this.prisma.background.findUnique({
      where: { id },
    });

    if (!background) {
      throw new NotFoundException('Background not found');
    }

    return this.toDto(background);
  }

  private toDto(entity: any): BackgroundDto {
    return {
      id: entity.id,
      key: entity.key,
      name: entity.name,
      abilityScores: entity.abilityScores,
      originFeatKey: entity.originFeatKey,
      skillProficiencies: entity.skillProficiencies,
      toolProficiency: entity.toolProficiency,
      equipmentOptions: entity.equipmentOptions,
    };
  }
}
