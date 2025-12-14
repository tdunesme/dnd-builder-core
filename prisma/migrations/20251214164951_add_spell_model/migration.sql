-- CreateTable
CREATE TABLE "Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "school" TEXT NOT NULL,
    "source" TEXT,
    "castingTime" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "components" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "classes" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "atHigherLevels" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Spell_key_key" ON "Spell"("key");

-- CreateIndex
CREATE INDEX "Spell_level_idx" ON "Spell"("level");

-- CreateIndex
CREATE INDEX "Spell_school_idx" ON "Spell"("school");
