import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BackgroundsService } from './backgrounds.service';

@Controller('backgrounds')
export class BackgroundsController {
  constructor(private readonly backgroundsService: BackgroundsService) {}

  @Get()
  async findAll() {
    return this.backgroundsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.backgroundsService.findOne(id);
  }
}
