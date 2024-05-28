const path = require('path');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
const { json } = require('stream/consumers');

const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

async function lerArquivo (caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(file) {
    file = JSON.parse(file);
    file.forEach(val => console.log(val))
}

console.log(lerArquivo(caminhoArquivo))

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Luiz'},
//     {nome: 'Kaio'},
// ]
// const json = JSON.stringify(pessoas, ' ', 2);


// escreve(caminhoArquivo, json);



