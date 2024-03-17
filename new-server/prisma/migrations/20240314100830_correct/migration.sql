-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resvervations` (
    `id` VARCHAR(191) NOT NULL,
    `date_reservation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `participants` INTEGER NOT NULL,
    `total_price` DOUBLE NOT NULL,
    `date_trip` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `tripId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trips` (
    `id` VARCHAR(191) NOT NULL,
    `trip_name` INTEGER NOT NULL,
    `trip_description` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `img` LONGBLOB NOT NULL,
    `places` INTEGER NOT NULL,
    `date_trip` DATETIME(3) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Resvervations` ADD CONSTRAINT `Resvervations_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resvervations` ADD CONSTRAINT `Resvervations_tripId_fkey` FOREIGN KEY (`tripId`) REFERENCES `Trips`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
