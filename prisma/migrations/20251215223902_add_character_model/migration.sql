-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "raceIndex" TEXT NOT NULL,
    "subraceIndex" TEXT,
    "classIndex" TEXT NOT NULL,
    "subclassIndex" TEXT,
    "backgroundIndex" TEXT NOT NULL,
    "alignmentIndex" TEXT,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CharacterSkill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "skillIndex" TEXT NOT NULL,
    CONSTRAINT "CharacterSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CharacterProficiency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "proficiencyIndex" TEXT NOT NULL,
    CONSTRAINT "CharacterProficiency_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CharacterLanguage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "languageIndex" TEXT NOT NULL,
    CONSTRAINT "CharacterLanguage_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CharacterSpell" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "spellIndex" TEXT NOT NULL,
    CONSTRAINT "CharacterSpell_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CharacterEquipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "equipmentIndex" TEXT NOT NULL,
    CONSTRAINT "CharacterEquipment_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Character_userId_idx" ON "Character"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSkill_characterId_skillIndex_key" ON "CharacterSkill"("characterId", "skillIndex");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterProficiency_characterId_proficiencyIndex_key" ON "CharacterProficiency"("characterId", "proficiencyIndex");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterLanguage_characterId_languageIndex_key" ON "CharacterLanguage"("characterId", "languageIndex");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSpell_characterId_spellIndex_key" ON "CharacterSpell"("characterId", "spellIndex");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterEquipment_characterId_equipmentIndex_key" ON "CharacterEquipment"("characterId", "equipmentIndex");
