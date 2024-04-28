//new Array(); []

const array = new Array(1, 2, 3, 4, 5, 6);

// new Object();

const pessoa1 = new Object();
pessoa1.nome = 'Gleydson'; ''
pessoa1.sobrenome = 'Lucena';
pessoa1.idade = 1;
pessoa1.falarNome = function () { console.log(this.nome) };
pessoa1.dataDeNasc = function () {
    const dataAtual = new Date().getFullYear();
    return dataAtual - this.idade;
}

// criar objeto

for (chave in pessoa1) {
    // console.log(pessoa1[chave])
}


//modulos factory function, constructor functions, Classes

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get falarNome(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
};

// Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//{} <= i this = objeto

const p1 = new Pessoa('Gleydson', 'Lucena');



