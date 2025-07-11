import express from "express";
import dotenv from "dotenv";
import routeReserva from "./src/modules/reserva/routes/reserva.route.js";
dotenv.config();

const port = process.env.PORTA || 3010;

const app = express();

app.use(express.json());

// rotas para reservas
app.use(routeReserva);

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});