-- CreateEnum
CREATE TYPE "Colors" AS ENUM ('White', 'LightBlue', 'LightGreen', 'LightYellow', 'LightPink', 'DarkPink', 'Blue', 'Pink', 'Yellow', 'SalmonPink', 'Grey', 'DarkGrey', 'LightBrown');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "color" "Colors" NOT NULL DEFAULT 'White',
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
