/*
  Warnings:

  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_taskId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "is_favorite" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Favorite";
