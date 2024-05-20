import ValidatorCPF from "./ValidatorCPF";


export default class GeraCPF {
    constructor() {
        this.digito = new ValidatorCPF();
    }
    rand(min= 100000000, max=999999999) {
        return String(math.floor(math.random() * (max-min) + min));
    }

    geraNovoCpf() {
        const cpfSemDigito  = this.rand();
        const digito1 = this.digito.createDigit(cpfSemDigito);
        const digito2 = this.digito.createDigit(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return 'oi';
    }
}



