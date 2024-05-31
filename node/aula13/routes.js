const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')

function meuMiddleware(req, res, next) {
    console.log();
    res.send('Passei no seu middleWare.');
    console.log();
    next();
    
}

// rotas da home

route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rotas de contato

route.get('/contato', homeController.rotaContato);

module.exports = route;
