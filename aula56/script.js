// FACTORY FUNCTION
// fUNÇÃO CONSTRUTORA

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${nome} está falando ${assunto}.`
        },
        altura: a,
        peso: p, 
        // Getter
        get imc() {
            const cImc = this.peso / (this.altura ** 2);
            return cImc.toFixed(2);
        }, 
        nomeCompleto(valor) {
            return `${nome} ${sobrenome}`
        }
    };
}

const p1 = criaPessoa('Gleydson', 'Lucena', 1.8, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 60);
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc)
console.log(p2.imc)
console.log(p1.nomeCompleto('Gleydson lucena guimaraes'))