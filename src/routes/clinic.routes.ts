import { Router } from "express";
import { ClinicController } from "../controllers/clinic.controller";

export const clinicRouter = Router()
const clinicController = new ClinicController()

clinicRouter.post("/", clinicController.createHandle)
clinicRouter.get("/", clinicController.getAll)
clinicRouter.get("/:id", clinicController.getOneHandle)