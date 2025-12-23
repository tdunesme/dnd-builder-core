-- AlterTable
ALTER TABLE "CharacterSpell" ADD COLUMN "source" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CharacterEquipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "equipmentIndex" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "CharacterEquipment_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CharacterEquipment" ("characterId", "equipmentIndex", "id") SELECT "characterId", "equipmentIndex", "id" FROM "CharacterEquipment";
DROP TABLE "CharacterEquipment";
ALTER TABLE "new_CharacterEquipment" RENAME TO "CharacterEquipment";
CREATE UNIQUE INDEX "CharacterEquipment_characterId_equipmentIndex_key" ON "CharacterEquipment"("characterId", "equipmentIndex");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
