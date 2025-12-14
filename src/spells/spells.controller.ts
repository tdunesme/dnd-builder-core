import { Controller, Get, Param } from '@nestjs/common';
import { SpellsService } from './spells.service';

@Controller('spells')
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @Get()
  async findAll() {
    return this.spellsService.findAll();
  }

  @Get(':key')
  async findOne(@Param('key') key: string) {
    return this.spellsService.findOne(key);
  }
}
