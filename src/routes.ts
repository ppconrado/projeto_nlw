import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

// Tipos de parametro
// http://localhost:3333/settings/1
// Routes params = parametros de rotas
// Query params => filtros e buscas
// http://localhost:3333/settings/1?search=algumacoisa&
// Body params => insercoes objetos nas requisicoes

routes.post("/settings", settingsController.create);

export { routes };
