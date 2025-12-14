import { Controller, Get, Param } from '@nestjs/common';
import { SpeciesService } from './species.service';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get()
  async findAll() {
    return this.speciesService.findAll();
  }

  @Get(':key')
  async findOneByKey(@Param('key') key: string) {
    return this.speciesService.findOneByKey(key);
  }
}
