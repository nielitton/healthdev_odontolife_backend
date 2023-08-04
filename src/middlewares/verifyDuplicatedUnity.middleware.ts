import { NextFunction, Request, Response } from "express";
import { prisma } from "../prisma/client";
import { Unity } from "@prisma/client";
import AppError from "../errors/appError";


const verifyDuplicatedUnity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  if (!name) {
    const verify = await prisma.unity.findUnique({
      where: {
        name,
      },
    });

    if (verify) {
      throw new AppError(409, "This already exists!");
    }
  } else {
    const unities = await prisma.doctor.findMany({ where: { name } });

    if (
      unities.find((unity: Unity) => name === unity.name)
    ) {
      throw new AppError(409, "This already exists!");
    }
  }

  next();
};

export default verifyDuplicatedUnity;