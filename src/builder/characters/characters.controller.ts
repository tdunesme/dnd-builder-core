import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  UseGuards,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  CharactersService,
  CharacterWithRelations,
} from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { User } from 'src/auth/decorators/user.decorator';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { CharacterDetailDto } from './dto/character-detail.dto';
import { CharacterListItemDto } from './dto/character-list-item.dto';
import { Character } from 'src/generated/prisma/client';
import { ParseCuidPipe } from 'src/utils/parse-cuid.pipe';

interface AuthUser {
  userId: string;
  email: string;
}

@Controller('characters')
@UseGuards(AuthGuard('jwt'))
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async findAll(@User() user: AuthUser): Promise<CharacterListItemDto[]> {
    const characters = await this.charactersService.findAllForUser(user.userId);
    return characters.map((c) => this.toCharacterListItemDto(c));
  }

  @Get(':id')
  async findById(
    @User() user: AuthUser,
    @Param('id', ParseCuidPipe) id: string,
  ): Promise<CharacterDetailDto> {
    const character: CharacterWithRelations =
      await this.charactersService.findById(user.userId, id);
    return this.toCharacterDetailDto(character);
  }

  @Post()
  async create(
    @User() user: AuthUser,
    @Body() dto: CreateCharacterDto,
  ): Promise<CharacterDetailDto> {
    const character: CharacterWithRelations =
      await this.charactersService.create(user.userId, dto);
    return this.toCharacterDetailDto(character);
  }

  @Patch(':id')
  async update(
    @User() user: AuthUser,
    @Param('id', ParseCuidPipe) id: string,
    @Body() dto: UpdateCharacterDto,
  ) {
    return await this.charactersService.update(user.userId, id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@User() user: AuthUser, @Param('id', ParseCuidPipe) id: string) {
    await this.charactersService.delete(user.userId, id);
  }

  private toCharacterListItemDto(character: Character): CharacterListItemDto {
    return {
      id: character.id,
      name: character.name,
      level: character.level,

      raceIndex: character.raceIndex,
      classIndex: character.classIndex,

      createdAt: character.createdAt,
    };
  }
  private toCharacterDetailDto(
    character: CharacterWithRelations,
  ): CharacterDetailDto {
    return {
      id: character.id,
      name: character.name,
      level: character.level,

      raceIndex: character.raceIndex,
      subraceIndex: character.subraceIndex,
      classIndex: character.classIndex,
      subclassIndex: character.subclassIndex,
      backgroundIndex: character.backgroundIndex,
      alignmentIndex: character.alignmentIndex,

      abilityScores: {
        strength: character.strength,
        dexterity: character.dexterity,
        constitution: character.constitution,
        intelligence: character.intelligence,
        wisdom: character.wisdom,
        charisma: character.charisma,
      },

      skillIndexes: character.skills.map((s) => s.skillIndex),
      proficiencyIndexes: character.proficiencies.map(
        (p) => p.proficiencyIndex,
      ),
      languageIndexes: character.languages.map((l) => l.languageIndex),
      spellIndexes: character.spells.map((s) => s.spellIndex),
      equipmentIndexes: character.equipment.map((e) => e.equipmentIndex),

      createdAt: character.createdAt,
      updatedAt: character.updatedAt,
    };
  }
}
