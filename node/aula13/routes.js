const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')

// rotas da home

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rotas de contato

route.get('/contato', homeController.rotaContato);

module.exports = route;
