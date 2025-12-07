import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(dto: CreateUserDto): Promise<User> {
    if (!dto || !dto.email || !dto.password) {
      throw new BadRequestException('Email and password are required');
    }

    const existing = this.findByEmail(dto.email);
    if (existing) {
      throw new BadRequestException('Email is already in use');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user: User = {
      id: randomUUID(),
      email: dto.email,
      passwordHash,
    };

    this.users.push(user);

    return user;
  }

  findByEmail(email: string): User | null {
    const user = this.users.find((u) => u.email === email);
    return user ?? null;
  }
}
