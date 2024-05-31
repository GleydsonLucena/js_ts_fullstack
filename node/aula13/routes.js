const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
route.get('/contato', homeController.rotaContato);

module.exports = route;
