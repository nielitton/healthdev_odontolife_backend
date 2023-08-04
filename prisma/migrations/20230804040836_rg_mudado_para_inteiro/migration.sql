/*
  Warnings:

  - Changed the type of `rg` on the `doctor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "rg",
ADD COLUMN     "rg" INTEGER NOT NULL;
