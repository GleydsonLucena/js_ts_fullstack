const express = require('express');
const app = express();
const routes = require('./routes')

// https://meusite.com/ <-GET - > entrega a página

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000,
    () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor execultando na porta 3000');
    // }); soadpiasd