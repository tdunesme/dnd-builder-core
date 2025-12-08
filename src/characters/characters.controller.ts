import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/createCharacter.dto';
import { Request } from 'express';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller('characters')
@UseGuards(AuthGuard('jwt'))
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Post()
  async create(
    @Req() req: AuthenticatedRequest,
    @Body() dto: CreateCharacterDto,
  ) {
    return this.charactersService.create(req.user.userId, dto);
  }

  @Get()
  async findAll(@Req() req: AuthenticatedRequest) {
    return this.charactersService.findAllForUser(req.user.userId);
  }

  @Get(':id')
  async findOne(
    @Req() req: AuthenticatedRequest,
    @Param('id', ParseIntPipe) characterId: number,
  ) {
    return this.charactersService.findOneForUser(req.user.userId, characterId);
  }

  @Delete(':id')
  async remove(
    @Req() req: AuthenticatedRequest,
    @Param('id', ParseIntPipe) characterId: number,
  ) {
    return this.charactersService.removeForUser(req.user.userId, characterId);
  }
}
