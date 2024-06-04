require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://gleydsonlucena:gleydson222@cursojs.u1kvxwd.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority&appName=cursojs';

mongoose.connect(connectionString)
    .then(resp => app.emit('OK!'))
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

// https://meusite.com/ <-GET - > entrega a página

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares

app.use(middlewareGlobal);
app.use(routes)

app.on('OK!', () => {
    app.listen(3000,
        () => {
            console.log('Acessar http://localhost:3000');
            console.log('Servidor execultando na porta 3000');
        });
});