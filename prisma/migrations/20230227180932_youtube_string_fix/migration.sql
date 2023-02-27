-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lecture" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Transcript" TEXT,
    "Youtube" TEXT,
    "outlineId" TEXT,
    "userId" TEXT,
    CONSTRAINT "Lecture_outlineId_fkey" FOREIGN KEY ("outlineId") REFERENCES "Outline" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Lecture_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Lecture" ("Transcript", "Youtube", "id", "outlineId", "userId") SELECT "Transcript", "Youtube", "id", "outlineId", "userId" FROM "Lecture";
DROP TABLE "Lecture";
ALTER TABLE "new_Lecture" RENAME TO "Lecture";
CREATE UNIQUE INDEX "Lecture_id_key" ON "Lecture"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
