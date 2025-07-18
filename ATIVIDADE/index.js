import express from "express";
import dotenv from "dotenv";
import routeReserva from "./src/modules/reserva/routes/reserva.route.js";

dotenv.config();

const app = express();
const port = process.env.PORTA;

app.use(express.json());
app.use(routeReserva);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
