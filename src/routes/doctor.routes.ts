import { Router } from "express";
import { DoctorController } from "../controllers/doctor.controller";

export const doctorRouter = Router()
const doctorController = new DoctorController()

doctorRouter.post("/", doctorController.createHandle)
doctorRouter.get("/", doctorController.getAll)
doctorRouter.get("/:id", doctorController.getOneHandle)
doctorRouter.patch("/:id", doctorController.updateHandle)
