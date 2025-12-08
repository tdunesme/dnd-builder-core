import { IsString, IsInt, IsOptional, Min, Max } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(20)
  level?: number;
}
