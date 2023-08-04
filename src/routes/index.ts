import { Router } from "express";
import { doctorRouter } from "./doctor.routes";
import { clinicRouter } from "./clinic.routes";
import { unityRouter } from "./unity.routes";

export const router = Router()

router.use("/doctor", doctorRouter)
router.use("/clinic", clinicRouter)
router.use("/unity", unityRouter)