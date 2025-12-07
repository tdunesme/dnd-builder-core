import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';

describe('UsersService', () => {
  let service: UsersService;
  let prismaService: {
    user: {
      create: jest.Mock;
      findUnique: jest.Mock;
    };
  };

  beforeEach(async () => {
    prismaService = {
      user: {
        create: jest.fn(),
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates a user with a hashed password', async () => {
    const email = 'test@example.com';
    const password = 'plainPassword';
    const hashedPassword = 'hashedPassword123';
    const mockUser = {
      id: '1',
      email,
      passwordHash: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prismaService.user.create.mockResolvedValue(mockUser);

    const user = await service.create({ email, password });

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.email).toBe(email);
    expect(user.passwordHash).toBeDefined();
    expect(user.passwordHash).not.toEqual(password);
    expect(prismaService.user.create).toHaveBeenCalled();
  });

  it('allows to find a user by email', async () => {
    const email = 'findme@example.com';
    const mockUser = {
      id: '1',
      email,
      passwordHash: 'hashed',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prismaService.user.findUnique.mockResolvedValue(mockUser);

    const found = await service.findByEmail(email);

    expect(found).toBeDefined();
    expect(found?.id).toEqual(mockUser.id);
    expect(found?.email).toEqual(mockUser.email);
    expect(prismaService.user.findUnique).toHaveBeenCalledWith({
      where: { email },
    });
  });

  it('returns null when user does not exist', async () => {
    prismaService.user.findUnique.mockResolvedValue(null);

    const found = await service.findByEmail('unknown@example.com');
    expect(found).toBeNull();
  });

  it('throws an error when creating a user with an existing email', async () => {
    const email = 'duplicate@example.com';

    const error = new Prisma.PrismaClientKnownRequestError(
      'Unique constraint failed on the fields: (`email`)',
      {
        code: 'P2002',
        clientVersion: '1.0.0',
        meta: { target: ['email'] },
      },
    );

    prismaService.user.create.mockRejectedValueOnce(error);

    await expect(service.create({ email, password: 'two' })).rejects.toThrow(
      'Email is already in use',
    );
  });
});
