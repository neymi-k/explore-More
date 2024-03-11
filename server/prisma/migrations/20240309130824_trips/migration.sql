/*
  Warnings:

  - The primary key for the `trips` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_trip` on the `trips` table. All the data in the column will be lost.
  - Added the required column `id` to the `trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trips` DROP PRIMARY KEY,
    DROP COLUMN `id_trip`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
