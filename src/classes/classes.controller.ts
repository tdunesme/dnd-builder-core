import { Controller, Get, Param } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  async findAll() {
    return this.classesService.findAll();
  }

  @Get(':key')
  async findOne(@Param('key') key: string) {
    return await this.classesService.findOne(key);
  }
}
