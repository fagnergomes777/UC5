Estrutura do Projeto
ATIVIDADE
├── src
│   ├── config
│   │   └── database.js          # Configuração do banco de dados
│   ├── modules
│   │   └── reserva
│   │       ├── controllers
│   │       │   └── reserva.controller.js  # Controlador para operações de reserva
│   │       ├── models
│   │       │   └── reserva.model.js       # Esquema do modelo de reserva
│   │       └── routes
│   │           └── reserva.route.js       # Rotas para operações de reserva
│   └── index.js                     # Ponto de entrada da aplicação
├── .env                             # Variáveis de ambiente
├── .env.example                     # Exemplo de variáveis de ambiente
├── package.json                     # Arquivo de configuração do NPM
├── package-lock.json                # Versões bloqueadas das dependências
├── README.md                        # Documentação do projeto
└── .gitignore                       # Arquivos a serem ignorados no Git
Instruções de Configuração
Clone o repositório:

git clone <url-do-repositorio>
Navegue até o diretório do projeto:

cd ATIVIDADE
Instale as dependências:

npm install
Crie um arquivo .env baseado no arquivo .env.example e configure sua conexão com o banco de dados.

Inicie a aplicação:

npm start
Uso
Criar uma Reserva: Envie uma requisição POST para /reservas com os detalhes da reserva.

Obter Todas as Reservas: Envie uma requisição GET para /reservas.

Obter uma Reserva por ID: Envie uma requisição GET para /reservas/:id.

Atualizar uma Reserva: Envie uma requisição PUT para /reservas/:id com os detalhes atualizados.

Excluir uma Reserva: Envie uma requisição DELETE para /reservas/:id.

Licença
Este projeto está licenciado sob a Licença MIT.