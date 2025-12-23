import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import cuid from 'cuid';

@Injectable()
export class ParseCuidPipe implements PipeTransform<string, string> {
  transform(value: string): string {
    if (!cuid.isCuid(value)) {
      throw new BadRequestException('Invalid CUID');
    }

    return value;
  }
}
