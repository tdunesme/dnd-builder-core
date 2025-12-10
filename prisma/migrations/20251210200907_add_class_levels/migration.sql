-- CreateTable
CREATE TABLE "ClassLevel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classId" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "proficiencyBonus" INTEGER NOT NULL,
    "features" JSONB NOT NULL,
    "progression" JSONB,
    CONSTRAINT "ClassLevel_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ClassLevel_classId_level_key" ON "ClassLevel"("classId", "level");
