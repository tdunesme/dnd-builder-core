import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

describe('CharactersController', () => {
  let controller: CharactersController;

  const serviceMock = {
    create: jest.fn(),
    update: jest.fn(),
    findAllForUser: jest.fn(),
  };

  const mockUser = {
    userId: 'user-1',
    email: 'test@test.com',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        {
          provide: CharactersService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get(CharactersController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('POST /characters → create', async () => {
    serviceMock.create.mockResolvedValue({
      id: 'c1',
      name: 'Hero',
      userId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
      level: 1,
    });

    const result = await controller.create(mockUser, { name: 'Hero' });

    expect(serviceMock.create).toHaveBeenCalledWith('user-1', { name: 'Hero' });
    expect(result.name).toBe('Hero');
  });

  it('GET /characters → findAll', async () => {
    serviceMock.findAllForUser.mockResolvedValue([
      {
        id: 'c1',
        name: 'Hero',
        userId: 'user-1',
        createdAt: new Date(),
        updatedAt: new Date(),
        level: 1,
      },
    ]);

    const result = await controller.findAll(mockUser);

    expect(serviceMock.findAllForUser).toHaveBeenCalledWith('user-1');
    expect(result).toHaveLength(1);
  });

  it('PATCH /characters/:id → update', async () => {
    serviceMock.update.mockResolvedValue({
      id: 'c1',
      name: 'Updated',
      userId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
      level: 1,
    });

    const result = await controller.update(mockUser, 'c1', { name: 'Updated' });

    expect(serviceMock.update).toHaveBeenCalledWith('user-1', 'c1', {
      name: 'Updated',
    });

    expect(result.name).toBe('Updated');
  });
});
