import { Request, Response } from "express";
import { ClinicService } from "../services/clinic/clinic.service";


export class ClinicController {
    async createHandle(req: Request, res: Response) {
        const { name, unityName } = req.body

        const clinicService = new ClinicService()

        const response = await clinicService.execute({ name, unityName })

        res.status(201).json(response)
    }
    async getOneHandle(req: Request, res: Response) {
        const { id } = req.params

        const clinicService = new ClinicService()

        const response = await clinicService.getOneClinic({ id })

        res.status(200).json(response)
    }
}