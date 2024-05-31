const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const middleWare = require('./src/middlewares/middleware');

// https://meusite.com/ <-GET - > entrega a página

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middleWare);
app.use(routes)

app.listen(3000,
    () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor execultando na porta 3000');
    });