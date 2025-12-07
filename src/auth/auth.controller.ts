import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import express from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    const user = await this.authService.register(dto);
    return {
      id: user.id,
      email: user.email,
    };
  }

  @Post('login')
  async login(
    @Body() dto: LoginUserDto,
  ): Promise<{ id: string; email: string; accessToken: string }> {
    return this.authService.login(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Req() req: express.Request) {
    // req.user vient de JwtStrategy.validate()
    return req.user;
  }
}
