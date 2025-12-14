/*
  Warnings:

  - Added the required column `description` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
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
INSERT INTO "new_Class" ("armorProficiencies", "createdAt", "equipmentOptions", "hasSpellcasting", "hitDie", "id", "key", "name", "primaryAbilities", "savingThrows", "skillChoices", "spellcastingType", "toolProficiencies", "updatedAt", "weaponProficiencies") SELECT "armorProficiencies", "createdAt", "equipmentOptions", "hasSpellcasting", "hitDie", "id", "key", "name", "primaryAbilities", "savingThrows", "skillChoices", "spellcastingType", "toolProficiencies", "updatedAt", "weaponProficiencies" FROM "Class";
DROP TABLE "Class";
ALTER TABLE "new_Class" RENAME TO "Class";
CREATE UNIQUE INDEX "Class_key_key" ON "Class"("key");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
