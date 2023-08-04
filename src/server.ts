import express from "express"

const PORT = process.env.PORT || 3333

const app = express()

app.use(express.json())

app.listen(3333, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})