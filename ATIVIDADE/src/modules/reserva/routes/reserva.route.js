import { Router } from "express";
import { ReservaController } from "../controllers/reserva.controller.js";

const router = Router();
const reservaController = new ReservaController();

router.get("/reservas", (req, res) => reservaController.listar(req, res));
router.get("/reservas/:id", (req, res) => reservaController.buscarPorId(req, res));
router.post("/reservas", (req, res) => reservaController.criar(req, res));
router.put("/reservas/:id", (req, res) => reservaController.atualizar(req, res));
router.delete("/reservas/:id", (req, res) => reservaController.deletar(req, res));

export default router;