-- CreateTable
CREATE TABLE "doctor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "advice" TEXT NOT NULL,
    "adviceState" TEXT NOT NULL,
    "adviceNumber" INTEGER NOT NULL,
    "specialtyName" TEXT NOT NULL,
    "rqe" INTEGER NOT NULL,
    "memedSinc" BOOLEAN NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specialty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "specialty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialty_name_key" ON "specialty"("name");

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_specialtyName_fkey" FOREIGN KEY ("specialtyName") REFERENCES "specialty"("name") ON DELETE CASCADE ON UPDATE CASCADE;
