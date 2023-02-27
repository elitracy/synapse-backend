/*
  Warnings:

  - You are about to drop the column `Context` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `Transcript` on the `Lecture` table. All the data in the column will be lost.
  - You are about to drop the column `Youtube` on the `Lecture` table. All the data in the column will be lost.
  - You are about to drop the column `Summary` on the `Outline` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Group` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "context" TEXT,
    "userId" TEXT,
    "outlineId" TEXT,
    CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Note_outlineId_fkey" FOREIGN KEY ("outlineId") REFERENCES "Outline" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Note" ("id", "outlineId", "userId") SELECT "id", "outlineId", "userId" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
CREATE UNIQUE INDEX "Note_id_key" ON "Note"("id");
CREATE TABLE "new_Lecture" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "transcript" TEXT,
    "youtube" TEXT,
    "outlineId" TEXT,
    "userId" TEXT,
    CONSTRAINT "Lecture_outlineId_fkey" FOREIGN KEY ("outlineId") REFERENCES "Outline" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Lecture_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Lecture" ("id", "outlineId", "userId") SELECT "id", "outlineId", "userId" FROM "Lecture";
DROP TABLE "Lecture";
ALTER TABLE "new_Lecture" RENAME TO "Lecture";
CREATE UNIQUE INDEX "Lecture_id_key" ON "Lecture"("id");
CREATE TABLE "new_Outline" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "summary" TEXT,
    "userId" TEXT,
    "groupId" TEXT,
    CONSTRAINT "Outline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Outline_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Outline" ("groupId", "id", "userId") SELECT "groupId", "id", "userId" FROM "Outline";
DROP TABLE "Outline";
ALTER TABLE "new_Outline" RENAME TO "Outline";
CREATE UNIQUE INDEX "Outline_id_key" ON "Outline"("id");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT
);
INSERT INTO "new_User" ("id") SELECT "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE TABLE "new_Group" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT
);
INSERT INTO "new_Group" ("id") SELECT "id" FROM "Group";
DROP TABLE "Group";
ALTER TABLE "new_Group" RENAME TO "Group";
CREATE UNIQUE INDEX "Group_id_key" ON "Group"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
