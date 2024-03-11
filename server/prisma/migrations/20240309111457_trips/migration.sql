/*
  Warnings:

  - You are about to drop the `Trips` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Trips`;

-- CreateTable
CREATE TABLE `trips` (
    `id_trip` INTEGER NOT NULL AUTO_INCREMENT,
    `trip_name` VARCHAR(191) NOT NULL,
    `trip_description` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `places` INTEGER NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_trip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
