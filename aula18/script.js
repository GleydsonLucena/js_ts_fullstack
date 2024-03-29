// const array = [1, 2, 3];
// array.push(4);
// console.log(array);
// array[0] = ('Luiz');
// console.log(array);


// const nome1 = 'Gleydson';
// const sobrenome = 'Lucena';
// const idade = 25;


// const nome2 = 'Luiz';
// const sobrenome2 = 'Miranda';
// const idade3 = 55;

// const pessoa1 = {
//     nome: 'Gleydson',
//     sobrenome: 'Lucena', 
//     idade: 23
// }
// const pessoa2 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda', 
//     idade: 55
// }

// console.log(pessoa1.nome);

// function criarPessoa (nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome, 
//         idade
//     };
// }

// const pessoa1 = criarPessoa('Gleydson', 'Lucena', 23);
// const pessoa2 = criarPessoa('Samara', 'Souza', 21);

// console.log(pessoa2, pessoa1);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Lucena', 
    idade: 23,

    falarAlgo () {
        console.log(`${this.nome}${this.sobrenome} está falando 'oi'`)
    },

    incrementarIdade() {
        this.idade++
    }
}

pessoa1.falarAlgo();
console.log(pessoa1.idade);
pessoa1.incrementarIdade()
console.log(pessoa1.idade);

for (let i=0;i<=10;i++) {
    pessoa1.incrementarIdade();
    console.log(pessoa1.idade);
};