-- CreateTable
CREATE TABLE "details" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION,
    "name" TEXT,

    CONSTRAINT "details_pkey" PRIMARY KEY ("id")
);
