import { Doctor } from "@prisma/client";
import { IDoctorCreate } from "../../interfaces/doctor";
import { prisma } from "../../prisma/client";

export class DoctorService {
  async execute({
    name, password, advice, adviceState, adviceNumber, specialtyName, rqe, memedSinc,
    genre, born, email, rg, cpf, cns, state, city, street, numberHouse, disctrict, complement, clinicName,
  }: IDoctorCreate): Promise<Doctor> {
    const newDoctor = await prisma.doctor.create({
        data: {
            name, password, advice, adviceState, adviceNumber, specialtyName, rqe, memedSinc,
    genre, born, email, rg, cpf, cns, state, city, street, numberHouse, disctrict, complement, clinicName,     
        }
    })

    return newDoctor
  }
  async getOneDoctor({ id }) {
    const doctor = await prisma.doctor.findFirst({
        where: id,
    })

    return doctor
  }
}
