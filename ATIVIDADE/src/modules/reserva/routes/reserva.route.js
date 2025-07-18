import express from "express";
import ReservaController from "../controllers/reserva.controller.js";

const router = express.Router();

router.get("/reservas", ReservaController.listarTodas);
router.get("/reservas/:id", ReservaController.listarPorId);
router.post("/reserva/cadastrar", ReservaController.cadastrar);
router.patch("/reserva/atualizar/:id", ReservaController.atualizar);
router.delete("/reserva/deletar/:id", ReservaController.deletarPorId);
router.delete("/reservas", ReservaController.deletarTodas);

export default router;
