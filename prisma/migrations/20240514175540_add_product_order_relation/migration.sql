/*
  Warnings:

  - Made the column `productId` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productId_fkey`;

-- AlterTable
ALTER TABLE `order` MODIFY `productId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
