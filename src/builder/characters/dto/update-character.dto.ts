import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateCharacterDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  level?: number;

  @IsOptional()
  @IsString()
  raceIndex?: string;

  @IsOptional()
  @IsString()
  subraceIndex?: string;

  @IsOptional()
  @IsString()
  classIndex?: string;

  @IsOptional()
  @IsString()
  subclassIndex?: string;

  @IsOptional()
  @IsString()
  backgroundIndex?: string;

  @IsOptional()
  @IsString()
  alignmentIndex?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(30)
  strength?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(30)
  dexterity?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(30)
  constitution?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(30)
  intelligence?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(30)
  wisdom?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(30)
  charisma?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  skillIndexes?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  proficiencyIndexes?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  languageIndexes?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  spellIndexes?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  equipmentIndexes?: string[];
}
