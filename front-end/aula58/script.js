// FUNÇÕES CONTRUTORAS 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Gleydson', 'Lucena');
const p2 = new Pessoa('Maria', 'Lucia');

console.log(p1.nome, typeof p2)