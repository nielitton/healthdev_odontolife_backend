import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import AppError from "./errors/appError";

const cors = require('cors')

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors())

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
