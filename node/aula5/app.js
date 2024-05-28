const path = require('path');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

async function lerArquivo (caminho) {
    const dados = await ler(caminho);
    return dados
}

const dadosArquivo = lerArquivo(caminhoArquivo)
    .then(file => console.log(file))
    .catch(e=> console.log(e));

console.log(dadosArquivo)

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Luiz'},
//     {nome: 'Kaio'},
// ]
// const json = JSON.stringify(pessoas, ' ', 2);


// escreve(caminhoArquivo, json);



