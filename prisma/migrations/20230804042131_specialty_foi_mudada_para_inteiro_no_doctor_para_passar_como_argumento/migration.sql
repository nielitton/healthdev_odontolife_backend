/*
  Warnings:

  - You are about to drop the column `specialtyName` on the `doctor` table. All the data in the column will be lost.
  - Added the required column `specialtyId` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_specialtyName_fkey";

-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "specialtyName",
ADD COLUMN     "specialtyId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "specialty"("id") ON DELETE CASCADE ON UPDATE CASCADE;
