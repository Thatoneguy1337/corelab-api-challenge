## Corelab Challenge:

# Backend To-do List API

<p>Este é o backend de uma aplicação To-do List, que fornece endpoints para gerenciar tarefas e favoritos. A API é desenvolvida em Node.js, usa TypeScript para tipagem estática e se comunica com um banco de dados PostgreSQL por meio do Prisma ORM. Ela oferece operações CRUD (Create, Read, Update, Delete) para tarefas e favoritos.</p>

## Pré-requisitos

- Node.js v20.3.0
- PostgreSQL (certifique-se de ter um banco de dados configurado)

## Configuração

1. Clone este repositório:

   ```bash
   git@github.com:Thatoneguy1337/corelab-api-challenge.git
   ```
2. Instalar as dependências:

   ```bash
   npm install
   ```

3.Configure as variáveis de ambiente:
  
  <p>Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis de ambiente:</p>
   
   ```bash
   DATABASE_URL=postgresql://seu-usuario:senha@localhost:5432/seu-banco-de-dados
   PORT=3000
   ```
  <p>Substitua seu-usuario, senha, localhost, 5432 e seu-banco-de-dados pelas informações de conexão do seu banco de dados PostgreSQL.</p>

 4.Execute as migrações do Prisma para criar as tabelas no banco de dados:
  
  ```bash
   npx prisma migrate dev
   ```
 5.Inicie o servidor:

   ```bash
    npm start
   ```

A API estará disponível em http://localhost:3000.

##Uso
A API oferece os seguintes endpoints:

<ul>
<li>/tasks: Endpoint para gerenciar tarefas.</li>
<li>/favorites: Endpoint para gerenciar favoritos.</li>
</ul>

Consulte a documentação da API para obter detalhes sobre os endpoints e as operações disponíveis.
 
   
