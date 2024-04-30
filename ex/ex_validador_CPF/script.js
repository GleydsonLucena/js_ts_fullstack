// 705.484.450-52 070.987.720-03

//replace(/\D+/g)
//Array.from(cpf)

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x

*/

function ValidadorCPF(cpf) {
    this.cpf = cpf;

    this.cpfLimpo = this.cpf.replace(/\D+/g, '');

    this.cpfEmArray = () => {
        const arrayCpf = Array.from(this.cpfLimpo);

        return arrayCpf;
    };

    this.multiplicação = () => {
        const arrayDoCPF = this.cpfEmArray();
        let maxMulti = 10;
        let arrayMulti = [];
        for (let i of arrayDoCPF) {
            arrayMulti.push(i * maxMulti);
            maxMulti--
        }
        return arrayMulti;
    };

    this.soma = () => this.multiplicação().reduce((ac, valor) => ac += Number(valor), 0);

    this.primeiroDigito = () => {
        let calc = 11 - (this.soma() % 11);
        if (calc > 9) {
            return 0;
        }
        return calc
    };

    this.multiplicaçãoSegundo = () => {
        const pd = this.primeiroDigito();
        const arrayDoCPF = [...this.cpfEmArray(), pd.toString()];
        let maxMulti = 11;
        let arrayMulti = [];
        for (let i of arrayDoCPF) {
            arrayMulti.push(i * maxMulti);
            maxMulti--
        }
        return arrayMulti;
    };

    this.somaSegundo = () => this.multiplicaçãoSegundo().reduce((ac, valor) => ac += Number(valor), 0);

    this.segundoDigito = () => {
        let calc = 11 - (this.somaSegundo() % 11);
        if (calc > 9) {
            return 0;
        }
        return calc
    };
}

ValidadorCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (typeof this.cpfLimpo !== 11) return false;
    return true
}

const txtCpf1 = '705.484.450-';
const txtCpf2 = '070.987.720-';
const txtCpf3 = '053.847.720-26';

const validador = new ValidadorCPF(txtCpf3);
const primeiroDigito = validador.primeiroDigito();
const segundoDigito = validador.segundoDigito();


const cpf1 = txtCpf1 + primeiroDigito + segundoDigito;
const cpf2 = txtCpf2 + primeiroDigito + segundoDigito;

// console.log(validador.valida());