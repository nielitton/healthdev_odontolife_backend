/*
  Warnings:

  - Added the required column `born` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cns` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complement` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disctrict` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberHouse` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "born" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "cns" INTEGER NOT NULL,
ADD COLUMN     "complement" TEXT NOT NULL,
ADD COLUMN     "cpf" INTEGER NOT NULL,
ADD COLUMN     "disctrict" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "numberHouse" TEXT NOT NULL,
ADD COLUMN     "rg" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
