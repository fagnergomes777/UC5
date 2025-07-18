import ReservaModel from "../models/reserva.model.js";

class ReservaController {
  static cadastrar(req, res) {
    try {
      const { id, cliente, quarto, dataEntrada, dataSaida } = req.body;
      if (!id || !cliente || !quarto || !dataEntrada || !dataSaida) {
        return res
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatórios!" });
      }

      ReservaModel.cadastrar(id, cliente, quarto, dataEntrada, dataSaida);
      res.status(201).json({ mensagem: "Reserva criada com sucesso!" });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  static listarTodas(req, res) {
    try {
      const reservas = ReservaModel.listarTodas();
      if (reservas.length === 0) {
        return res.status(200).json({ mensagem: "Nenhuma reserva encontrada." });
      }
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  static listarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const reserva = ReservaModel.listarPorId(id);

      if (!reserva) {
        return res.status(404).json({ mensagem: "Reserva não encontrada!" });
      }

      res.status(200).json(reserva);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  static atualizar(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { novoCliente, novoQuarto, novaEntrada, novaSaida } = req.body;

      const reservaAtualizada = ReservaModel.atualizar(id, novoCliente, novoQuarto, novaEntrada, novaSaida);

      if (!reservaAtualizada) {
        return res.status(404).json({ mensagem: "Reserva não encontrada!" });
      }

      res.status(200).json({ mensagem: "Reserva atualizada com sucesso" });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  static deletarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const resultado = ReservaModel.deletarPorId(id);

      if (!resultado) {
        return res.status(404).json({ mensagem: "Reserva não encontrada!" });
      }

      res.status(200).json({ mensagem: "Reserva excluída com sucesso!" });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  static deletarTodas(req, res) {
    try {
      ReservaModel.deletarTodas();
      res.status(200).json({ mensagem: "Todas as reservas foram excluídas!" });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }
}

export default ReservaController;
