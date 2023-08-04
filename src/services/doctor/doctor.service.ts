import { Doctor } from "@prisma/client";
import { IDoctorCreate, IDoctorUpdate } from "../../interfaces/doctor";
import { prisma } from "../../prisma/client";

export class DoctorService {
  async execute({
    name,
    password,
    advice,
    adviceState,
    adviceNumber,
    rqe,
    memedSinc,
    genre,
    born,
    email,
    rg,
    cpf,
    cns,
    state,
    city,
    street,
    numberHouse,
    disctrict,
    complement,
    clinicName,
  }: IDoctorCreate): Promise<Doctor> {
    const newDoctor = await prisma.doctor.create({
      data: {
        name,
        password,
        advice,
        adviceState,
        adviceNumber,
        rqe,
        memedSinc,
        genre,
        born,
        email,
        rg,
        cpf,
        cns,
        state,
        city,
        street,
        numberHouse,
        disctrict,
        complement,
        clinicName,
      },
    });

    return newDoctor;
  }
  async getOneDoctor({ id }: { id: string }) {
    const doctor = await prisma.doctor.findFirst({
      where: {
        id,
      },
    });

    return doctor;
  }
  async updateOneDoctor({
    id,
    name,
    password,
    advice,
    adviceState,
    adviceNumber,
    rqe,
    memedSinc,
    genre,
    born,
    email,
    rg,
    cpf,
    cns,
    state,
    city,
    street,
    numberHouse,
    disctrict,
    complement,
    clinicName,
  }: IDoctorUpdate): Promise<Doctor> {
    const changedDoctor = await prisma.doctor.update({
      where: {
        id,
      },
      data: {
        name,
        password,
        advice,
        adviceState,
        adviceNumber,
        rqe,
        memedSinc,
        genre,
        born,
        email,
        rg,
        cpf,
        cns,
        state,
        city,
        street,
        numberHouse,
        disctrict,
        complement,
        clinicName,
      },
    });

    return changedDoctor;
  }
  async getAll() {
    const allDoctors = prisma.doctor.findMany()

    return allDoctors
  }
}
