import ValidatorCPF from "./ValidatorCPF";


export default class GeraCPF {
    rand(min= 100000000, max=999999999) {
        return String(math.floor(math.random() * (max-min) + min));
    }

    geraNovoCpf() {
        return console.log(this.rand())
        // const digito2 = this.digito.createDigit(cpfSemDigito + digito1);
        // const novoCPF = cpfSemDigito + digito1 + digito2;
        
    }
}



