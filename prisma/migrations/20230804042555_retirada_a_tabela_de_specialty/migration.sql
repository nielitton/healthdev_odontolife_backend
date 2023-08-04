/*
  Warnings:

  - You are about to drop the column `specialtyId` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the `specialty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_specialtyId_fkey";

-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "specialtyId";

-- DropTable
DROP TABLE "specialty";
