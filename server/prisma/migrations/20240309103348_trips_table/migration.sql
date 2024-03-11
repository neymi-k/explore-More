-- CreateTable
CREATE TABLE `Trips` (
    `id_trip` INTEGER NOT NULL AUTO_INCREMENT,
    `trip_name` VARCHAR(191) NOT NULL,
    `trip_description` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `places` INTEGER NOT NULL,
    `date_trip` DATETIME(3) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_trip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
