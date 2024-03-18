/*
  Warnings:

  - You are about to alter the column `img` on the `Trips` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Trips` MODIFY `img` VARCHAR(191) NOT NULL;
