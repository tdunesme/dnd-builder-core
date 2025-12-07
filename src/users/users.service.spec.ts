import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates a user with a hashed password', async () => {
    const email = 'test@example.com';
    const password = 'plainPassword';

    const user = await service.create({ email, password });

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.email).toBe(email);
    expect(user.passwordHash).toBeDefined();
    expect(user.passwordHash).not.toEqual(password);
  });

  it('allows to find a user by email', async () => {
    const email = 'findme@example.com';
    const password = 'secret';

    const created = await service.create({ email, password });

    const found = service.findByEmail(email);

    expect(found).toBeDefined();
    expect(found?.id).toEqual(created.id);
    expect(found?.email).toEqual(created.email);
  });

  it('returns null when user does not exist', () => {
    const found = service.findByEmail('unknown@example.com');
    expect(found).toBeNull();
  });

  it('throws an error when creating a user with an existing email', async () => {
    const email = 'duplicate@example.com';
    await service.create({ email, password: 'one' });

    await expect(service.create({ email, password: 'two' })).rejects.toThrow();
  });
});
