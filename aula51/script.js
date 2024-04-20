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

function falaFrase(comeco) {
    function falaResto(resto) {
        return  comeco + ' ' + resto
    }

    return falaResto
}

const olaMundo = falaFrase('Olá')

console.log(olaMundo('mundo'))