/*
  Warnings:

  - You are about to drop the column `iv` on the `details` table. All the data in the column will be lost.
  - The `amount` column on the `details` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "details" DROP COLUMN "iv",
DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION;
