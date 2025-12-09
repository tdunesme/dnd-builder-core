-- CreateTable
CREATE TABLE "Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hitDie" INTEGER NOT NULL,
    "primaryAbilities" JSONB NOT NULL,
    "savingThrows" JSONB NOT NULL,
    "armorProficiencies" JSONB NOT NULL,
    "weaponProficiencies" JSONB NOT NULL,
    "toolProficiencies" JSONB NOT NULL,
    "skillChoices" JSONB NOT NULL,
    "equipmentOptions" JSONB NOT NULL,
    "hasSpellcasting" BOOLEAN NOT NULL DEFAULT false,
    "spellcastingType" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "ownerId" TEXT NOT NULL,
    "speciesId" INTEGER,
    "classId" INTEGER,
    "backgroundId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Character_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Character_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Character_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("backgroundId", "classId", "createdAt", "id", "level", "name", "ownerId", "speciesId", "updatedAt") SELECT "backgroundId", "classId", "createdAt", "id", "level", "name", "ownerId", "speciesId", "updatedAt" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE INDEX "Character_ownerId_idx" ON "Character"("ownerId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Class_key_key" ON "Class"("key");
