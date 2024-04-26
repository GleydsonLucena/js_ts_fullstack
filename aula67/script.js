const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce((acumulador, valor, indice, array) => acumulador += valor, 0)
// console.log(soma)

const pares = numeros.filter((acumulador, valor) => {
    if(valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador
}, 0);

// console.log(pares)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
   return acumulador; 
}, 0)

console.log(maisVelha);


