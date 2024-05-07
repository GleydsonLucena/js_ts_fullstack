class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {console.log(`${this.nome} está falando!`)}

    comer() { console.log(`${this.nome} está comendo!`)}

    beber() { console.log(`${this.nome} está bebendo!`)}
}

const p1 = new Pessoa('Gleydson', 'Lucena');
const p2 = new Pessoa('mARIA', 'Lucena');
const p3 = new Pessoa('Joao', 'Lucena');
const p4 = new Pessoa('Joana', 'Lucena');

console.log(p1, p2, p3, p4)