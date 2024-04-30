// 705.484.450-52 070.987.720-03

//replace(/\D+/g)
//Array.from(cpf)

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x

*/

function ValidadorCPF(cpf) {
    this.cpf = cpf,
    this.cpfLimpo = this.cpf.replace(/\D+/g, '');
    
    this.cpfEmArray = () => {
        const arrayCpf = Array.from(cpfLimpo);
        
        return arrayCpf;
    }

    this.multiplicação = () => {
        const arrayDoCPF = this.cpfEmArray();
        let maxMulti = 10;
        let arrayMulti = [];
        for (let i of arrayDoCPF){
            arrayMulti.push(i*maxMulti);
            maxMulti--
        }
        return arrayMulti;
    }

    this.soma = () => this.multiplicação().reduce((ac, valor) => ac += Number(valor), 0);

    this.primeiroDigito = () => 11 - (this.soma() % 11);

    

}

const validador = new ValidadorCPF('705.484.450');

console.log(typeof validador.cpfLimpo)