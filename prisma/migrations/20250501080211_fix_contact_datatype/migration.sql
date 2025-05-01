/*
  Warnings:

  - You are about to alter the column `contact` on the `Query` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "Query" ALTER COLUMN "contact" SET DATA TYPE VARCHAR(10);
