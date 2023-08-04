-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "advice" TEXT NOT NULL,
    "adviceState" TEXT NOT NULL,
    "adviceNumber" INTEGER NOT NULL,
    "rqe" INTEGER NOT NULL,
    "memedSinc" BOOLEAN NOT NULL,
    "genre" TEXT NOT NULL,
    "born" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rg" INTEGER NOT NULL,
    "cpf" INTEGER NOT NULL,
    "cns" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "numberHouse" INTEGER NOT NULL,
    "disctrict" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "clinicName" TEXT NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Unity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinic" (
    "id" TEXT NOT NULL,
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
