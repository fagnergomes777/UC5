import express from "express"
import dotenv from "dotenv"
import routeProduto from "./src/modules/produto/routes/produto.route.js"
dotenv.config()

const port = process.env.PORTA

const app = express()

// analisador
app.use(express.json())

// rotas para produtos
app.use(routeProduto)

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`)
})

