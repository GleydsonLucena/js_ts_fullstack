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
        const arrayCpf = Array.from(this.cpfLimpo);
        
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

    this.multiplicaçãoSegundo = () => {
        const pd = this.primeiroDigito();
        const arrayDoCPF = [...this.cpfEmArray(), pd.toString()];
        let maxMulti = 11;
        let arrayMulti = [];
        for (let i of arrayDoCPF){
            arrayMulti.push(i*maxMulti);
            maxMulti--
        }
        return arrayMulti;
    }

    this.somaSegundo = () => this.multiplicaçãoSegundo().reduce((ac, valor) => ac += Number(valor), 0);

    this.segundoDigito = () => 11 - (this.somaSegundo() % 11);

}

const primeiroD = new ValidadorCPF('705.484.450-');
const primeiroDigito = primeiroD.primeiroDigito();
const segundoD = new ValidadorCPF('705.484.450-' + primeiroDigito);
const segundoDigito = primeiroD.segundoDigito();


const cpf = '705.484.450-' + primeiroDigito + segundoDigito;
console.log(cpf);