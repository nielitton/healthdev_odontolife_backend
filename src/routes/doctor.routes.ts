import { Router } from "express";
import { DoctorController } from "../controllers/doctor.controller";

export const doctorRouter = Router()
const doctorController = new DoctorController()

doctorRouter.post("/", doctorController.createHandle)
doctorRouter.get("/:id", doctorController.getOneHandle)