## Corelab Challenge:

# Backend To-do List API

<p>Este é o backend de uma aplicação To-do List, que fornece endpoints para gerenciar tarefas e favoritos. A API é desenvolvida em Node.js, usa TypeScript para tipagem estática, se comunica com um banco de dados PostgreSQL por meio do Prisma ORM e utiliza-se do framework ExpressJs. Ela oferece operações CRUD (Create, Read, Update, Delete) para tarefas e favoritos.</p>

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
    npm run dev 
   ```

A API estará disponível em http://localhost:3000.

## Uso
A API oferece os seguintes endpoints:

<ul>
<li>/tasks: Endpoint para gerenciar tarefas.</li>
<li>/favorites: Endpoint para gerenciar favoritos.</li>
</ul>

Consulte a documentação da API para obter detalhes sobre os endpoints e as operações disponíveis.
 
   
## **Endpoints**

| HTTP Method | Description            | Endpoint                      | 
| ----------- | ---------------------- | ----------------------------- | 
| POST        | Create task            | `/task`                       | 
| PATCH       | Update Task            | `/task/:id`                   | 
| GET         | List task              | `/task`                       |  
| DELETE      | Delete task            | `/task/:id`                   | 
| POST        | Add favorite           | `/favorite`                   | 
| GET         | List all favorites     | `/favorite`                   |  
| PATCH       | Update favorite        | `/favorite/:id`               | 
| DELETE      | Delete favorite        | `/favorite/:id`               | 


<h2 align ='center'> Criando tarefa </h2>
 
 Nessa rota o usuário pode criar uma tarefa dentro do corpo da requisição é necessário preencher o campo de título, no entanto o campos descrição e cor são opcionais
 e a cor da tarefa vêm como padrão na cor branca.

```json
{
	"title": "esquentar almoço",
	"description": "botar prato de comida no microondas por 5 minutos."
}
```

`POST /task - FORMATO DA RESPOSTA - STATUS 201`

```json
{
   "id": 3,
	"title": "esquentar almoço",
	"description": "botar prato de comida no microondas por 5    minutos.",
	"color": "White"
}
```
<h2 align ='center'> Editar tarefa </h2>
 
 Essa rota permite que o usuário edite uma tarefa passando a informação que o usuário quer alterar na request, é de suma importância que o id da tarefa seja passado como parâmetro da requisição.

```json
{
	
{
	"description": "Esquentar em 2 minutos"
}
```

`PATCH /task/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": 3,
	"title": "esquentar almoço",
	"description": "Esquentar em 2 minutos",
	"color": "White"
}
```
<h2 align ='center'> deletar tarefa </h2>
 
 Essa rota permite que o usuário delete uma tarefa passando o id da tarefa como parâmetro da requisição requisição.



`DELETE /task/:id - FORMATO DA RESPOSTA - STATUS 204 NO RESPONSE`


<h2 align ='center'> Listar tarefas </h2>
 
Essa rota permite que o usuário liste suas tarefas criadas.

`GET /task - FORMATO DA RESPOSTA - STATUS 200`
 
```json
[
	{
		"id": 2,
		"title": "esquentar almoço",
		"description": "botar prato de comida no microondas por 5    minutos.",
		"color": "White"
	},
	{
		"id": 3,
		"title": "esquentar almoço",
		"description": "Esquentar em 2 minutos",
		"color": "White"
	}
]
```
<h2 align ='center'> adicionando favorito </h2>
 
 Nessa rota o usuário pode adicionar uma tarefa ao favoritos, passando o id por parâmetro na requisição.


`POST /favorite/:id - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"id": 2,
	"taskId": 3,
	"task": {
		"id": 3,
		"title": "esquentar almoço",
		"description": "Esquentar em 2 minutos",
		"color": "White",
		"isFavorite": false
	}
}
```
<h2 align ='center'> deletar favorito </h2>
 
 Nessa rota o usuário pode deletar uma tarefas favoritadas, passando o id por parâmetro na requisição.


`DELETE /favorite/:id - FORMATO DA RESPOSTA - STATUS 204 NO CONTENT`


<h2 align ='center'> listar favoritos </h2>
 
 Nessa rota o usuário pode listar as tarefas favoritadas, passando o id por parâmetro na requisição.


`GET /favorite - FORMATO DA RESPOSTA - STATUS 200`

```json

[
	{
		"id": 2,
		"taskId": 3,
		"task": {
			"id": 3,
			"title": "esquentar almoço",
			"description": "Esquentar em 2 minutos",
			"color": "White"
		}
	},
	{
		"id": 3,
		"taskId": 4,
		"task": {
			"id": 4,
			"title": "atualizar Linkedin",
			"description": "adicionar novos projetos ao meu portfolio do Linkedin",
			"color": "White"
		}
	}
]

```

<span>feito por: Victor Guterres Borges</span>



