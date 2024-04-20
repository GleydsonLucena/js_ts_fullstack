// function soma(a, b) {
//     return a + b;
// }

// function soma2(a, b) {
//     console.log(a + b);
// }

// soma2(5, 2);

// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome}
// }

// console.log(criaPessoa('Gleydson', 'Lucena'));

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return  comeco + ' ' + resto
//     }

//     return falaResto
// }

// const olaMundo = falaFrase('Olá')

// console.log(olaMundo('mundo'))

function multiplicador(multi) {
    return (n)=> {
        return n * multi
    };
}

const duplica = multiplicador(2);
const triplica = multiplicador(3);
const quadriplica = multiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))