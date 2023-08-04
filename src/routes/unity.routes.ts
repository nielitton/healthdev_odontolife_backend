import { Router } from "express";
import { DoctorController } from "../controllers/doctor.controller";

export const unityRouter = Router()
const unityController = new DoctorController()

unityRouter.post("/", unityController.createHandle)
unityRouter.get("/:id", unityController.getOneHandle)