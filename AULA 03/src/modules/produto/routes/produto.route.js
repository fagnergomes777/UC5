import express from "express";
import ProdutoController from "../controllers/produto.controller.js";

const router = express.Router();

// Listar todos os produtos
router.get("/produtos", ProdutoController.listarTodos);

// Listar produto por id
router.get("/produtos/:id", ProdutoController.listarPorId);

// Cadastrar um produto
router.post("/produto/cadastrar", ProdutoController.cadastrar);

// Atualizar um produto
router.patch("/produto/atualizar/:id", ProdutoController.atualizar);

// Deletar produto por id
router.delete("/produto/deletar/:id", ProdutoController.deletarPorId);

// Deletar todos os produtos
router.delete("/produtos", ProdutoController.deletarTodos);

// Toal produtos
//router.get("/produto/total", ProdutoController.totalProdutos)

export default router;
