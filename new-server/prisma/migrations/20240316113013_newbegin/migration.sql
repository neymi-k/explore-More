/*
  Warnings:

  - Added the required column `trip_name` to the `Trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Trips` ADD COLUMN `trip_name` VARCHAR(191) NOT NULL;
