import { PrismaClient } from '../../src/generated/prisma/client';

const srdSpecies = [
  {
    key: 'dragonborn',
    name: 'Dragonborn',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Medium'],
  },
  {
    key: 'dwarf',
    name: 'Dwarf',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Medium'],
  },
  {
    key: 'elf',
    name: 'Elf',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Medium'],
  },
  {
    key: 'gnome',
    name: 'Gnome',
    creatureType: 'Humanoid',
    size: 'Small',
    speed: 30,
    sizeOptions: ['Small'],
  },
  {
    key: 'goliath',
    name: 'Goliath',
    creatureType: 'Humanoid',
    size: 'Medium',
    // Seule espèce jouable SRD avec 35 ft de speed
    speed: 35,
    sizeOptions: ['Medium'],
  },
  {
    key: 'halfling',
    name: 'Halfling',
    creatureType: 'Humanoid',
    size: 'Small',
    speed: 30,
    sizeOptions: ['Small'],
  },
  {
    key: 'human',
    name: 'Human',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    // Choix Small ou Medium dans les règles 2024
    sizeOptions: ['Small', 'Medium'],
  },
  {
    key: 'orc',
    name: 'Orc',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Medium'],
  },
  {
    key: 'tiefling',
    name: 'Tiefling',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    // Choix Small ou Medium dans les règles 2024
    sizeOptions: ['Small', 'Medium'],
  },
];

export async function seedSpecies(prisma: PrismaClient) {
  console.log('🌱 Seeding SRD species...');

  for (const data of srdSpecies) {
    await prisma.species.upsert({
      where: { key: data.key },
      update: {
        name: data.name,
        creatureType: data.creatureType,
        size: data.size,
        speed: data.speed,
        sizeOptions: data.sizeOptions,
      },
      create: {
        key: data.key,
        name: data.name,
        creatureType: data.creatureType,
        size: data.size,
        speed: data.speed,
        sizeOptions: data.sizeOptions,
      },
    });

    console.log(`  ✅ Species upserted: ${data.key}`);
  }
}
