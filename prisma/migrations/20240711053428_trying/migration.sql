/*
  Warnings:

  - Added the required column `iv` to the `details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userKey` to the `details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "details" ADD COLUMN     "iv" TEXT NOT NULL,
ADD COLUMN     "userKey" TEXT NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE TEXT;
