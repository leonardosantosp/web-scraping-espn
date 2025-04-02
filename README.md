# web-scraping-espn

## 📝 Descrição

Web Scraping ESPN é um projeto desenvolvido para ministrar um curso na Universidade Federal de Alfenas. O objetivo é realizar a raspagem de dados no site da ESPN para coletar informações sobre os times da NBA e seus jogadores (permitido pela ESPN). Para mais detalhes acesse o `robots.txt` da espn, disponível em: [robotsEspn](https://www.espn.com/robots.txt).

A raspagem é feita utilizando um código em Jupyter Notebook, detalhando passo a passo da execução. Os dados extraídos alimentam um banco de dados NoSQL (MongoDB). A API do projeto consulta essa base de dados e retorna um JSON para o frontend.

Como os dados são extraídos diretamente da ESPN, a API não precisa de métodos HTTP como DELETE, POST ou PUT, contendo apenas endpoints GET:

GET `/teams` - Retorna todos os times

GET `/teams/:id` - Retorna informações de um time específico

GET `/players` - Retorna todos os jogadores

GET `/players/:id` - Retorna informações de um jogador específico

GET `/teams/:id/players` - Retorna os jogadores de um time específico

## 🛠️ Tecnologias Utilizadas

- Backend:

   - Node.js

   - Fastify

   - Zod

   - Swagger

   - Mongoose

   - Dotenv

- Web Scraping:

    - Python
    
    - Jupyter Notebook

- Frontend:

   - HTML

   - CSS

   - React

   - React-DOM

   - React-Router-DOM

- Banco de Dados:

   - MongoDB (Atlas)
 


## ⚙️ Pré-requisitos

Antes de instalar e executar o projeto, certifique-se de que você tem:

- Node.js instalado

- Python instalado

- [Conta no MongoDB Atlas](https://www.mongodb.com/atlas)

## 📂 Instalação do Node.js

Se ainda não tem o Node.js instalado, baixe e instale a versão mais recente:
[Instalar Node.js](https://nodejs.org/pt)

## 🚀 Instalação do Projeto

1. Clone o repositório
  ```bash
    git clone https://github.com/leonardosantosp/web-scraping-espn
    cd web-scraping-espn
  ```
2. Instale as dependências da API:

 ```bash
    cd api
    npm install
 ```
3. Instale as dependências da API:
   
 ```bash
    cd frontend
    npm install
  ```

## 📄 Configuração do Banco de Dados (MongoDB)

### Criando um Cluster no MongoDB Atlas:

- Acesse [MongoDB Atlas](https://www.mongodb.com/atlas) e crie uma conta (caso não tenha).
- Crie um novo cluster gratuito.
- Vá até a aba Database Access e crie um usuário com permissões de leitura e escrita.
- Vá até a aba Network Access e adicione o IP 0.0.0.0/0 para permitir conexões externas.
- No cluster, clique em Connect, depois escolha Drivers, selecione Node.js, copie a Connection String.

### Configurando a Conexão no Projeto:

1. Na raiz de `web-scraping-espn/api` crie um arquivo `.env` com o seguinte conteúdo:

  ```bash
    MONGO_USER=seu_usuario
    MONGO_PASSWORD=sua_senha
    MONGO_CLUSTER=seu_cluster
  ```
2. O código para conexão com o MongoDB está em `api/config/connect.js`.

## 📊 Povoando o Banco de Dados

Para povoar o banco, execute o código `scraping/scraping.ipynb` no Jupyter Notebook e siga os passos da raspagem de dados.

Na seção Conectando ao MongoDB, altere esta linha:

```bash
  client = MongoClient(f"mongodb+srv://{user}:{password}@{cluster}/?retryWrites=true&w=majority&appName=Cluster0")
```
Substitua `user`, `password` e `cluster` pelos dados de conexão do seu MongoDB Atlas.

## 🚀 Executando o Projeto

1. Inicie a API:
   
  ```bash
    cd api
    npm run dev
  ```
2. Em outro terminal, inicie o frontend:

  ```bash
    cd frontend
    npm run dev
  ```
A aplicação estará disponível por padrão em: http://localhost:5173/

## 📄 Testando a API

A documentação da API está disponível no endpoint `/docs` da própria API. 

Exemplo: http://127.0.0.1:3333/docs

## 🏛️ Estrutura do Banco de Dados

O banco de dados conta com as seguintes collections:

`teams`
```bash
  {
    "_id": "ObjectId",
    "time": "Los Angeles Lakers",
    "image_link": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lal.png&h=200&w=200",
    "technical": "JJ Redick",
  }
```

`players`
```bash
    {
      "_id": "ObjectId",
      "image": "https://a.espncdn.com/i/headshots/nba/players/full/4432816.png"
      "name": "LaMelo Ball",
      "number": "1",
      "position": "PG",
      "age": "23",
      "height": "2.01m",
      "weight": "81kg",
      "university": "--"
      "salary": "$35,147,000",
      "team_id": "ObjectId",
  }
```
## 🏆 Créditos

Este projeto foi desenvolvido para fins educacionais, visando demonstrar a coleta, armazenamento e exibição de dados obtidos via web scraping.

📌 Desenvolvido por `Leonardo dos Santos Paiva` 🎓 Universidade Federal de Alfenas
