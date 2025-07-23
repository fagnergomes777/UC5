// import client from "./database.js";

// class CriarTable {
//     static async produto() {
//         const consulta = `
//             CREATE TABLE IF NOT EXISTS produto (
//                 id SERIAL PRIMARY KEY,
//                 nome VARCHAR(100) NOT NULL,
//                 preco NUMERIC(10,2) NOT NULL,
//                 descricao TEXT NOT NULL
//             );
//         `;
//         try {
//             await client.query(consulta);
//             console.log("Tabela 'produto' criada com sucesso.");
//         } catch (erro) {
//             console.error("Erro ao criar tabela 'produto':", erro.message);
//         }
//     }
// }

// CriarTable.produto();

// export default CriarTable;