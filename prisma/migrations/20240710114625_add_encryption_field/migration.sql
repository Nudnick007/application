/*
  Warnings:

  - You are about to drop the `YourModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "YourModel";

-- CreateTable
CREATE TABLE "details" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "amount" TEXT,
    "iv" TEXT NOT NULL,

    CONSTRAINT "details_pkey" PRIMARY KEY ("id")
);
