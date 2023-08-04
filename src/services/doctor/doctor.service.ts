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
    specialty,
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
        specialty,
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
      select: {
        id: true,
        name: true,
        password: true,
        advice: true,
        adviceState: true,
        adviceNumber: true,
        rqe: true,
        memedSinc: true,
        genre: true,
        born: true,
        email: true,
        rg: true,
        cpf: true,
        cns: true,
        state: true,
        city: true,
        street: true,
        numberHouse: true,
        disctrict: true,
        complement: true,
        clinic: {
          select: {
            id: true,
            name: true,
            unityName: true,
          },
        },
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
    const allDoctors = prisma.doctor.findMany();

    return allDoctors;
  }
}
