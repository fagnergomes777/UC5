import reservas from "../../../config/database.js";

class ReservaModel {
  static cadastrar(id, cliente, quarto, dataEntrada, dataSaida) {
    reservas.push({ id, cliente, quarto, dataEntrada, dataSaida });
  }

  static listarTodas() {
    return reservas.map(reserva => reserva);
  }

  static listarPorId(id) {
    return reservas.find(reserva => reserva.id === id);
  }

  static atualizar(id, novoCliente, novoQuarto, novaEntrada, novaSaida) {
    const reserva = reservas.find(reserva => reserva.id === id);
    if (!reserva) return null;

    reserva.cliente = novoCliente || reserva.cliente;
    reserva.quarto = novoQuarto || reserva.quarto;
    reserva.dataEntrada = novaEntrada || reserva.dataEntrada;
    reserva.dataSaida = novaSaida || reserva.dataSaida;

    return reserva;
  }

  static deletarPorId(id) {
    const index = reservas.findIndex(reserva => reserva.id === id);
    if (index === -1) return null;

    reservas.splice(index, 1);
    return true;
  }

  static deletarTodas() {
    reservas.length = 0;
  }
}

export default ReservaModel;
