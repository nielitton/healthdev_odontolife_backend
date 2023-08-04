import { Router } from "express";
import { UnityController } from "../controllers/unity.controller";

export const unityRouter = Router()
const unityController = new UnityController()

unityRouter.post("/", unityController.createHandle)
unityRouter.get("/:id", unityController.getOneHandle)