import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { CurrentUser } from './decorators/current-user.decorator';
import type { JwtUser } from './types/jwt-user.type';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    const user = await this.authService.register(dto);
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  @Post('login')
  async login(
    @Body() dto: LoginUserDto,
  ): Promise<{ user: UserDto; accessToken: string }> {
    return await this.authService.login(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getProfile(@CurrentUser() user: JwtUser) {
    const dbUser = await this.usersService.findById(user.userId);

    if (!dbUser) {
      throw new NotFoundException('User not found');
    }

    return {
      id: dbUser.id,
      email: dbUser.email,
      firstName: dbUser.firstName,
      lastName: dbUser.lastName,
    };
  }
}
