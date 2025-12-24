import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClassesService } from './classes.service';
import { SrdRessourcesDto } from '../dto/srd-ressources.dto';

@Controller('classes')
@UseGuards(AuthGuard('jwt'))
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  async findAll(): Promise<SrdRessourcesDto[]> {
    return this.classesService.getAll();
  }

  @Get(':index')
  async findById(@Param('index') index: string): Promise<any> {
    return this.classesService.getById(index);
  }
}
