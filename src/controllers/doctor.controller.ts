import { Request, Response, response } from "express";
import { DoctorService } from "../services/doctor/doctor.service";

export class DoctorController {
  async createHandle(req: Request, res: Response) {
    const {
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
    } = req.body;

    const doctorService = new DoctorService();

    const response = await doctorService.execute({
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
    });

    res.status(201).json(response);
  }
  async getOneHandle(req: Request, res: Response) {
    const { id } = req.params;

    const doctorService = new DoctorService();

    const response = await doctorService.getOneDoctor({ id });

    res.status(200).json(response);
  }
  async updateHandle(req: Request, res: Response) {
    const { id } = req.params;
    const {
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
    } = req.body;

    const doctorService = new DoctorService();

    const response = await doctorService.updateOneDoctor({
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
    });

    res.status(200).json(response);
  }

  async getAll(req: Request, res: Response) {
    const doctors = new DoctorService()

    const response = await doctors.getAll()

    res.status(200).json(response)
  }
}
