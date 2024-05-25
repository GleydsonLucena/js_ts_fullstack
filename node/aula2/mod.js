module.exports = class Cachorro{
    constructor (nome ) {
        this.nome = nome;
    }

    latir() {
        console.log(`O ${this.nome} está latindo!`)
    }
}