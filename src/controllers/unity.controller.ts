import { Request, Response } from "express";
import { UnityService } from "../services/unitie/unity.service";


export class UnityController {
    async createHandle(req: Request, res: Response) {
        const { name } = req.body

        const unityService = new UnityService()

        const response = await unityService.execute({ name })

        res.status(201).json(response)
    }
    async getOneHandle(req: Request, res: Response) {
        const { id } = req.params

        const unityService = new UnityService()

        const response = await unityService.getOneUnity({ id })

        res.status(200).json(response)
    }
}