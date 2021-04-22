import express from "express";

import "./database"; // Import from index.ts

const app = express();

/**
 * GET    -> Buscas
 * POST   -> Criação
 * PUT    -> Alteração
 * DELETE -> Deletar
 * PATCH  -> Alterar uma informação especifica
 */
app.get("/", (request, response) => {
  return response.json({
    message: "Ola NLW 05",
  });
});

app.post("/", (request, response) => {
  return response.json({ message: "Usuario salvo com sucesso!" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
