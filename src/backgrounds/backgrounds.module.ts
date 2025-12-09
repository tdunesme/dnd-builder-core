import { Module } from '@nestjs/common';
import { BackgroundsService } from './backgrounds.service';
import { BackgroundsController } from './backgrounds.controller';

@Module({
  providers: [BackgroundsService],
  controllers: [BackgroundsController],
})
export class BackgroundsModule {}
