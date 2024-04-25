const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numMaior = numeros.map( value => value * 2 );

// console.log(numMaior);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const nomes = pessoas.map( value => value.nome);

const removerNome = pessoas.map( value => ({idade : value.idade}));

console.log(removerNome);

// console.log(nomes);



