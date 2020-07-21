const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.status(200).json({ repositories })
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body
  const obj = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }
  repositories.push(obj);
  return response.status(200).json({ message: 'Repositório criado com sucesso!', repository: obj })
});

app.put("/repositories/:id", (request, response) => {
  
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
