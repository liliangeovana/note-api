// CONFIGURAÇÃO PRINCIPAL E INICIALIZADOR DO SERVIDOR

import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import routes from "@routes/index";

const api = express();

api.use(express.json());
api.use(routes);

exports.api = onRequest(api);
