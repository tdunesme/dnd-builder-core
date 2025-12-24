import { Module } from '@nestjs/common';
import { SrdClientService } from './srd-client.service';

@Module({
  providers: [SrdClientService],
  exports: [SrdClientService],
})
export class SrdClientModule {}
