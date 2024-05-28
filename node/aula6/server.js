const express = require('express');
const app = express();


// https://meusite.com/ <-GET - > entrega a página

app.get('/', (req, res) => {
    req.listeners(res)
    res.send(('Hellow World!'))
})