# Projeto: Sistema de Reservas de Hotel

Este é um projeto backend simples para gerenciamento de **reservas de hotel**, desenvolvido com **Node.js** e **Express**, seguindo o padrão **MVC modular** com banco de dados simulado em memória.

## 📁 Estrutura de Pastas

```
src/
├── config/
│   └── database.js          # Banco de dados simulado (array)
├── modules/
│   └── reserva/
│       ├── controllers/     # Lógica de negócio
│       ├── models/          # Acesso e manipulação dos dados
│       └── routes/          # Rotas da API
docs/
└── convencoes.md            # Guia de convenções do projeto
index.js                     # Arquivo principal da aplicação
.env                         # Configuração de porta e variáveis
```

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/reservas-hotel.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a porta no arquivo `.env`:
```env
PORTA=3007
```

4. Inicie o servidor:
```bash
npm start
```

A aplicação estará disponível em:  
[http://localhost:3007](http://localhost:3007)

## 📌 Endpoints Disponíveis

- `GET /reservas` – Lista todas as reservas
- `GET /reservas/:id` – Retorna uma reserva por ID
- `POST /reserva/cadastrar` – Cadastra nova reserva
- `PATCH /reserva/atualizar/:id` – Atualiza uma reserva
- `DELETE /reserva/deletar/:id` – Deleta reserva específica
- `DELETE /reservas` – Deleta todas as reservas

## 📄 Convenções

O projeto segue as diretrizes descritas em [`docs/convenções.md`](./docs/convenções.md).

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- dotenv

---

Desenvolvido para fins educacionais.
