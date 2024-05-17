export const nome = 'Gleydson';
export const sobrenome = 'Lucena';
export const idade = 23;

export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
