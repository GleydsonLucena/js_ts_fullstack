// Filter

// SEMPRE RETORNA UM ARRAY COM A MESMA QUANTIDADE DE ELEMENTOS, OU MENOS.

// RETORNE OS NÚMEROS MAIORES QUE 10

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// let arrayMaiores = numeros.filter((value, index) => {
//     // console.log(value, index)
//     return (value > 10);
// }
// );

// RETORNE AS PESSOAS QUE TEM O NOME COM 5 LETRAS OU MAIS
// RETORNE AS PESSOAS COM MAIS DE 50 ANOS
// RETORNE AS PESSOAS CUJO NOME TERMINA COM A

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const pessoa = pessoas.filter(valor => {
    return valor
});

const nomes =pessoa.forEach(p => p.nome.length > 5 ? console.log(p.nome) : false);

const idades = pessoa.forEach(i => i.idade > 50 ? console.log(i.idade) : false);

const terminaA = pessoa.forEach(a => a.nome.slice(-1) === 'a' ? console.log(`${a.nome} termina com 'A'`) : false);

console.log(nomes);
console.log(idades);
console.log(terminaA)

