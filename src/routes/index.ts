import { Router } from "express";
import { doctorRouter } from "./doctor.routes";
import { clinicRouter } from "./clinic.routes";
import { unityRouter } from "./unity.routes";
import errorHandler from "../middlewares/errorHandler.middleware";

export const router = Router()

router.use("/doctor", doctorRouter)
router.use("/clinic", clinicRouter)
router.use("/unity", unityRouter)
router.use("/specialty", unityRouter)