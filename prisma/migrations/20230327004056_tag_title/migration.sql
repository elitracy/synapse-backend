/*
  Warnings:

  - Made the column `name` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "name" SET NOT NULL;
