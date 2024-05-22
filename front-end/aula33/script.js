const pessoa = {
    nome: 'Gleydson',
    sobrenome: 'Lucena',
    idade: 23,
    endereço: {
        rua: 'modulo 4',
        numero: 26
    }
};

const {nome, ...resto} = pessoa;
console.log(nome, resto )