// src/users/users.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return {
      id: user.id,
      email: user.email,
    };
  }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    const user = this.usersService.findByEmail(email);
    if (!user) return null;
    return {
      id: user.id,
      email: user.email,
    };
  }
}
