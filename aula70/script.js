//new Array(); []

const array = new Array(1, 2, 3, 4, 5, 6);

// new Object();

const pessoa1 = new Object();
pessoa1.nome = 'Gleydson';
pessoa1.sobrenome = 'Lucena';
pessoa1.idade = 1;
pessoa1.falarNome = function() {console.log(this.nome)};
pessoa1.dataDeNasc = function() {
    const dataAtual = new Date().getFullYear();
    return dataAtual - this.idade;
}



pessoa1.falarNome()
console.log(pessoa1.dataDeNasc())

