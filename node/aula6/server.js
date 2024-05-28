const express = require('express');
const app = express();


// https://meusite.com/ <-GET - > entrega a página

app.get('/', (req, res) => {
    res.send(('Hellow World!'))
})

app.get('/contato', (res, req) => {
    res.send('Obrigado em entrar em contato com a gente!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor execultando na porta 3000');
});