const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador += valor, 0);

console.log(pares)


// const pessoas = [
//     { nome: 'Luiz', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Letícia', idade: 10 },
//     { nome: 'Rosana', idade: 32 },
//     { nome: 'Wallace', idade: 47 }
// ]




