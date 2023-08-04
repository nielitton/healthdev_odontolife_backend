/*
  Warnings:

  - Added the required column `clinicName` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `numberHouse` on the `doctor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "clinicName" TEXT NOT NULL,
DROP COLUMN "numberHouse",
ADD COLUMN     "numberHouse" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Unity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Unity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unityName" TEXT NOT NULL,

    CONSTRAINT "clinic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Unity_name_key" ON "Unity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clinic_name_key" ON "clinic"("name");

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_clinicName_fkey" FOREIGN KEY ("clinicName") REFERENCES "clinic"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinic" ADD CONSTRAINT "clinic_unityName_fkey" FOREIGN KEY ("unityName") REFERENCES "Unity"("name") ON DELETE CASCADE ON UPDATE CASCADE;
