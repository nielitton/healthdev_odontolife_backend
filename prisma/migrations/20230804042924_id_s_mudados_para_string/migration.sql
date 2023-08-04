/*
  Warnings:

  - The primary key for the `Unity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `clinic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `doctor` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Unity" DROP CONSTRAINT "Unity_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Unity_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Unity_id_seq";

-- AlterTable
ALTER TABLE "clinic" DROP CONSTRAINT "clinic_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "clinic_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "clinic_id_seq";

-- AlterTable
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "doctor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "doctor_id_seq";
