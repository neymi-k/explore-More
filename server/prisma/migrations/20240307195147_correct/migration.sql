/*
  Warnings:

  - You are about to drop the column `seconde_name` on the `users` table. All the data in the column will be lost.
  - Added the required column `second_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `seconde_name`,
    ADD COLUMN `second_name` VARCHAR(191) NOT NULL;
