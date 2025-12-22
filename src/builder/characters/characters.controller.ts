import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { User } from 'src/auth/decorators/user.decorator';
import { UpdateCharacterDto } from './dto/update-character.dto';

interface AuthUser {
  userId: string;
  email: string;
}

@Controller('characters')
@UseGuards(AuthGuard('jwt'))
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Post()
  async create(@User() user: AuthUser, @Body() dto: CreateCharacterDto) {
    return this.charactersService.create(user.userId, dto);
  }

  @Get()
  async findAll(@User() user: AuthUser) {
    return this.charactersService.findAllForUser(user.userId);
  }

  @Patch(':id')
  async update(
    @User() user: AuthUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCharacterDto,
  ) {
    return this.charactersService.update(user.userId, id, dto);
  }
}
