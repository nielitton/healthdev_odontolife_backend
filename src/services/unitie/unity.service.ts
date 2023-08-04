import { Unity } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { IUnityCreate } from "../../interfaces/unity";

export class UnityService {
  async execute({
    name
  }: IUnityCreate): Promise<Unity> {
    const newUnity = await prisma.unity.create({
        data: {
            name
        }
    })

    return newUnity
  }
  async getOneUnity({ id }) {
    const unities = await prisma.unity.findFirst({
        where: id,
    })

    return unities
  }
  async getAll() {
    const unities = prisma.unity.findMany()

    return unities
  }
}
