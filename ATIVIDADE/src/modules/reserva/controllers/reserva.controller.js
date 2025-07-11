import { reservas } from "../models/reserva.model.js";

export class ReservaController {
  listar(req, res) {
    res.json(reservas);
  }

  buscarPorId(req, res) {
    const id = Number(req.params.id);
    const reserva = reservas.find(r => r.id_reserva === id);
    if (!reserva) return res.status(404).json({ mensagem: "Reserva não encontrada" });
    res.json(reserva);
  }

  criar(req, res) {
    const novaReserva = req.body;
    novaReserva.id_reserva = reservas.length + 1;
    reservas.push(novaReserva);
    res.status(201).json(novaReserva);
  }

  atualizar(req, res) {
    const id = Number(req.params.id);
    const index = reservas.findIndex(r => r.id_reserva === id);
    if (index === -1) return res.status(404).json({ mensagem: "Reserva não encontrada" });
    reservas[index] = { ...reservas[index], ...req.body };
    res.json(reservas[index]);
  }

  deletar(req, res) {
    const id = Number(req.params.id);
    const index = reservas.findIndex(r => r.id_reserva === id);
    if (index === -1) return res.status(404).json({ mensagem: "Reserva não encontrada" });
    reservas.splice(index, 1);
    res.status(204).send();
  }
}