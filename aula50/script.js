// Argumentos fica salvo na variavel argumetns

function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Gleydson', sobrenome: 'Lucena', idade: 20};
funcao(obj)