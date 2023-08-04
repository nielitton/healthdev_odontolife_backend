import { Router } from "express";
import { UnityController } from "../controllers/unity.controller";
import verifyDuplicatedUnity from "../middlewares/verifyDuplicatedUnity.middleware";

export const unityRouter = Router()
const unityController = new UnityController()

unityRouter.post("/", verifyDuplicatedUnity,unityController.createHandle)
unityRouter.get("/", unityController.getAll)
unityRouter.get("/:id", unityController.getOneHandle)