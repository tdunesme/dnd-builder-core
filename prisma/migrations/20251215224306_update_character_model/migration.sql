-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "raceIndex" TEXT,
    "subraceIndex" TEXT,
    "classIndex" TEXT,
    "subclassIndex" TEXT,
    "backgroundIndex" TEXT,
    "alignmentIndex" TEXT,
    "strength" INTEGER,
    "dexterity" INTEGER,
    "constitution" INTEGER,
    "intelligence" INTEGER,
    "wisdom" INTEGER,
    "charisma" INTEGER,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("alignmentIndex", "backgroundIndex", "charisma", "classIndex", "constitution", "createdAt", "dexterity", "id", "intelligence", "level", "name", "raceIndex", "strength", "subclassIndex", "subraceIndex", "updatedAt", "userId", "wisdom") SELECT "alignmentIndex", "backgroundIndex", "charisma", "classIndex", "constitution", "createdAt", "dexterity", "id", "intelligence", "level", "name", "raceIndex", "strength", "subclassIndex", "subraceIndex", "updatedAt", "userId", "wisdom" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE INDEX "Character_userId_idx" ON "Character"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
