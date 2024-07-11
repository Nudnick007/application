/*
  Warnings:

  - You are about to drop the `details` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "details";

-- CreateTable
CREATE TABLE "YourModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "iv" TEXT NOT NULL,

    CONSTRAINT "YourModel_pkey" PRIMARY KEY ("id")
);
