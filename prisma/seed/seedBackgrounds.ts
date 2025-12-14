import { PrismaClient } from '../../src/generated/prisma/client';

const srdBackgrounds = [
  {
    key: 'acolyte',
    name: 'Acolyte',
    description:
      "Vous avez passé vos années au service d'un temple, apprenant les rites et les traditions d'une foi particulière. Vous avez étudié les textes sacrés, participé aux cérémonies religieuses et aidé les fidèles dans leurs besoins spirituels. Votre dévotion vous a donné une compréhension profonde de la religion et des compétences pour guider les autres.",
    abilityScores: ['Intelligence', 'Sagesse', 'Charisme'],
    originFeatKey: 'magic-initiate-cleric',
    skillProficiencies: ['Perspicacité', 'Religion'],
    toolProficiency: {
      type: 'tool',
      value: 'Matériel de calligraphie',
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        gp: 8,
        items: [
          'Matériel de calligraphie',
          'Livre (prières)',
          'Symbole sacré',
          'Parchemin (10 feuilles)',
          'Robe',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
  },
  {
    key: 'criminal',
    name: 'Criminel',
    description:
      'Vous avez vécu une vie de crime, que ce soit comme voleur, assassin, contrebandier ou autre malfaiteur. Vous connaissez les rouages du monde souterrain, les réseaux de contacts illégaux et les techniques pour éviter la détection. Votre passé vous a enseigné à être discret, méfiant et prêt à agir rapidement.',
    abilityScores: ['Dextérité', 'Constitution', 'Intelligence'],
    originFeatKey: 'alert',
    skillProficiencies: ['Escamotage', 'Discrétion'],
    toolProficiency: {
      type: 'tool',
      value: 'Outils de voleur',
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        gp: 16,
        items: [
          'Dague',
          'Dague',
          'Outils de voleur',
          'Pied-de-biche',
          'Bourse',
          'Bourse',
          'Vêtements de voyageur',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
  },
  {
    key: 'sage',
    name: 'Érudit',
    description:
      "Vous avez passé des années à étudier dans des bibliothèques, des universités ou auprès de maîtres savants. Votre soif de connaissances vous a mené à accumuler une vaste compréhension de l'histoire, de la magie, des sciences et des cultures. Vous êtes un chercheur passionné, toujours à la recherche de nouvelles informations et de réponses aux mystères du monde.",
    abilityScores: ['Constitution', 'Intelligence', 'Sagesse'],
    originFeatKey: 'magic-initiate-wizard',
    skillProficiencies: ['Arcanes', 'Histoire'],
    toolProficiency: {
      type: 'tool',
      value: 'Matériel de calligraphie',
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        gp: 8,
        items: [
          'Bâton de combat',
          'Matériel de calligraphie',
          'Livre (histoire)',
          'Parchemin (8 feuilles)',
          'Robe',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
  },
  {
    key: 'soldier',
    name: 'Soldat',
    description:
      "Vous avez servi dans une armée, une milice ou une force de garde, participant à des batailles et des campagnes militaires. Vous avez appris la discipline, le travail d'équipe et les tactiques de combat. Votre expérience sur le champ de bataille vous a endurci et vous a enseigné à survivre dans les situations les plus dangereuses.",
    abilityScores: ['Force', 'Dextérité', 'Constitution'],
    originFeatKey: 'savage-attacker',
    skillProficiencies: ['Athlétisme', 'Intimidation'],
    toolProficiency: {
      type: 'gaming-set-choice',
      note: 'Choisissez un type de jeu de société',
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        gp: 14,
        items: [
          'Lance',
          'Arc court',
          'Flèches (20)',
          'Jeu de société (choisi)',
          'Trousse de soins',
          'Carquois',
          'Vêtements de voyageur',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
  },
];

export async function seedBackgrounds(prisma: PrismaClient) {
  console.log('🌱 Seeding SRD backgrounds...');

  for (const data of srdBackgrounds) {
    await prisma.background.upsert({
      where: { key: data.key },
      update: {
        name: data.name,
        description: data.description,
        abilityScores: data.abilityScores,
        originFeatKey: data.originFeatKey,
        skillProficiencies: data.skillProficiencies,
        toolProficiency: data.toolProficiency,
        equipmentOptions: data.equipmentOptions,
      },
      create: {
        key: data.key,
        name: data.name,
        description: data.description,
        abilityScores: data.abilityScores,
        originFeatKey: data.originFeatKey,
        skillProficiencies: data.skillProficiencies,
        toolProficiency: data.toolProficiency,
        equipmentOptions: data.equipmentOptions,
      },
    });

    console.log(`  ✅ Background upserted: ${data.key}`);
  }
}
