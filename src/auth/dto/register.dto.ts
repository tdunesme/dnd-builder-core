import { IsString, MinLength } from 'class-validator';
import { IsEmail } from 'class-validator';
export class RegisterUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
