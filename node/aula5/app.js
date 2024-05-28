const path = require('path');
const escreve = require('./modules/escrever');

const json = JSON.stringify(file, ' ', 2);
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

const pessoas = {
    nome: 'João',
    nome: 'Maria',
    nome: 'Luiz',
    nome: 'Kaio',
}

escreve(caminhoArquivo, json);


