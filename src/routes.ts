import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();

const usersController = new UsersController();

const messagesController = new MessagesController();

// Tipos de parametro
// http://localhost:3333/settings/1
// Routes params = parametros de rotas
// Query params => filtros e buscas
// http://localhost:3333/settings/1?search=algumacoisa&
// Body params => insercoes objetos nas requisicoes

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);

routes.get("/messages/:id", messagesController.showByUser);

export { routes };

// "admin_id": "3b609834-3539-40e6-ac51-f0bfaf56be2e"
