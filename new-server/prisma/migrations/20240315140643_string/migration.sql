/*
  Warnings:

  - The primary key for the `Trips` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `trip_name` on the `Trips` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Trips` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `Resvervations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Resvervations` DROP FOREIGN KEY `Resvervations_tripId_fkey`;

-- DropForeignKey
ALTER TABLE `Resvervations` DROP FOREIGN KEY `Resvervations_userId_fkey`;

-- DropIndex
DROP INDEX `idx_trips_id` ON `Trips`;

-- AlterTable
ALTER TABLE `Trips` DROP PRIMARY KEY,
    DROP COLUMN `trip_name`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Resvervations`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date_reservation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `participants` INTEGER NOT NULL,
    `total_price` DOUBLE NOT NULL,
    `userId` INTEGER NOT NULL,
    `tripId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_tripId_fkey` FOREIGN KEY (`tripId`) REFERENCES `Trips`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
