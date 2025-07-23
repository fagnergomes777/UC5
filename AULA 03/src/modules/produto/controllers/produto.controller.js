import ProdutoModel from "../models/produto.model.js";

class ProdutoController {
  // Cadastra um novo produto
  static async cadastrar(requisicao, resposta) {
    try {
      const { nome, preco, descricao } = requisicao.body;
      if (!nome || !preco || !descricao) {
        return resposta
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatórios!" });
      }
      await ProdutoModel.create({nome, preco, descricao});
      resposta.status(201).json({ mensagem: "Produto criado com sucesso!" });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor, tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Lista todos os produtos
  static async listarTodos(requisicao, resposta) {
    try {
      const produtos = await ProdutoModel.findAll();
      if (produtos) {
        return resposta.status(200).json({ mensagem: "Banco de dados vazio!" });
      }
      resposta.status(200).json(produtos);
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor, tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Lista um produto pelo ID
  static async listarPorId(requisicao, resposta) {
    try {
      const id = parseInt(requisicao.params.id);
      const produto = await ProdutoModel.findByPk(id);
      if (!produto) {
        return resposta
          .status(404)
          .json({ mensagem: "Produto não encontrado!" });
      }
      resposta.status(200).json(produto[0]);
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor, tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Atualiza um produto pelo ID
  static async atualizar(requisicao, resposta) {
    try {
      const { novoNome, novoPreco, novaDescricao } = requisicao.body;
      const id = parseInt(requisicao.params.id);
      const produto = await ProdutoModel.update(
        {novoNome, novoPreco, novaDescricao},
        {where:{id}}
      );
      if (!produto || produto.length === 0) {
        return resposta
          .status(404)
          .json({ mensagem: "Produto não encontrado!" });
      }
      resposta.status(200).json({ mensagem: "Produto atualizado com sucesso!" });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor, tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Deleta um produto pelo ID
  static async deletarPorId(requisicao, resposta) {
    try {
      const id = parseInt(requisicao.params.id);
      const produto = await ProdutoModel.destroy({where:{id}}); 
      if (!produto || produto.length === 0) {
        return resposta
          .status(404)
          .json({ mensagem: "Produto não encontrado!" });
      }
      resposta.status(200).json({ 
        mensagem: "Produto excluído com sucesso!", 
        produtoExcluido: produto[0] 
      });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor, tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Deleta todos os produtos
  static async deletarTodos(requisicao, resposta) {
    try {
      await ProdutoModel.destroy({truncate: true});
      resposta
        .status(200)
        .json({ mensagem: "Todos os produtos foram deletados!" });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor, tente mais tarde!",
        erro: error.message,
      });
    }
  }
  // static async totalProdutos(requisicao, resposta) {
  //   try {
  //     const total = await ProdutoModel.totalProdutos();
  //     resposta
  //       .status(200)
  //       .json(total);
  //   } catch (error) {
  //     resposta.status(500).json({
  //       mensagem: "Erro interno do servidor. Por favor, tente mais tarde!",
  //       erro: error.message,
  //     });
  //   }
  // }

}

export default ProdutoController;
