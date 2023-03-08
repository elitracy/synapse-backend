/*
  Warnings:

  - You are about to drop the column `summary` on the `Outline` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[outlineId]` on the table `Lecture` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "Outline" DROP COLUMN "summary",
ADD COLUMN     "contentTree" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Lecture_outlineId_key" ON "Lecture"("outlineId");
