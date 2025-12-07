import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';

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
  async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.login(dto);
    return {
      id: user.id,
      email: user.email,
    };
  }
}
