import { Clinic } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { IClinicCreate } from "../../interfaces/clinic";

export class ClinicService {
  async execute({ name, unityName }: IClinicCreate): Promise<Clinic> {
    const newClinic = await prisma.clinic.create({
        data: {
          name,
          unityName
        }
    })

    return newClinic
  }
  async getOneClinic({ id }) {
    const clinics = await prisma.clinic.findFirst({
        where: id,
    })

    return clinics
  }
  async getAll() {
    const clinics = prisma.clinic.findMany()

    return clinics
  }
}
