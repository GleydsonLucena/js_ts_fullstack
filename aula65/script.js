// Filter, map, reduce

// RETORNE OS NÚMEROS MAIORES QUE 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let arrayMaiores = numeros.filter();
let arrayMenores = [];

for (let n of numeros) {

    if (n > 10) {
        arrayMaiores.push(n);
    } else {
        arrayMenores.push(n);
    }
};

console.log(arrayMaiores);
console.log(arrayMenores);
