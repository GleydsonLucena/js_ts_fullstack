const express = require('express');
const app = express();


// https://meusite.com/ <-GET - > entrega a página

app.get('/',
    (req, res) => {
        res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
    }
);

app.get('/testes/:idUsuarios?',
    (req, res) => {
        console.log(req.params);
        res.send('Oi!')
    });

app.post('/',
    (req, res) => {
        res.send('Recebi o formulário!')
    });

app.listen(3000,
    () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor execultando na porta 3000');
    });