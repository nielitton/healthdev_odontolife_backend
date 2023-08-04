import express from "express"
import errorHandler from "./middlewares/errorHandler.middleware"
import { router } from "./routes"

const PORT = process.env.PORT || 3333

const app = express()

app.use(express.json())

app.use(router)

app.use(errorHandler)

app.listen(3333, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})