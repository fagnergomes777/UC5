import client from "../../../config/database.js";

class ProdutoModel {
  static async cadastrar(nome, preco, descricao) {
    const dados = [nome, preco, descricao];
    const consulta = `
      insert into produto(nome, preco, descricao)
      values ($1, $2, $3) returning *;
    `;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async listarTodos() {
    const consulta = `select * from produto`;
    const resultado = await client.query(consulta);
    return resultado.rows;
  }

  static async listarPorId(id) {
    const dados = [id];
    const consulta = `select * from produto where id = $1`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async atualizar(id, nome, preco, descricao) {
    const dados = [nome, preco, descricao, id];
    const consulta = `
      update produto 
      set nome = coalesce($1, nome), 
          preco = coalesce($2, preco), 
          descricao = coalesce($3, descricao)
      where id = $4 returning *;
    `;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async deletarPorId(id) {
    const dados = [id];
    const consulta = `delete from produto where id = $1 returning *`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async deletarTodos() {
    const consulta = `delete from produto`;
    await client.query(consulta);
  }

  static async totalProdutos() {
    const consulta = `select count(id) as total from produto`;
    const resultado = await client.query(consulta);
    return resultado.rows;
  }
}

export default ProdutoModel;
