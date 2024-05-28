const path = require('path');
const fs = require('fs').promises;

const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

const pessoas = {
    nome: 'João',
    nome: 'Maria',
    nome: 'Luiz',
    nome: 'Kaio',
}

const json = JSON.stringify(pessoas, '', 2);



fs.writeFile(caminhoArquivo, json, { flag: 'a' });

