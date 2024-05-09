// 705.484.450-52 070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2 
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito)
se o número digitado for 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2 
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (segundo digito)
se o número digitado for 9, consideramos 0.
*/

class Validator {
    constructor(cpf) {
        this.cpf = cpf;
        this.cpfClean = this.cpf.replace(/\D+/g, '');
        this.cpfPartial = this.cpfClean.slice(0, -2);
    }
    result = document.querySelector('.result-off');

    openResult() {
        if (this.result.style.display === 'block') return;
        this.result.style.display = 'block';
        setTimeout(e => {
            this.result.style.display = 'none';
        }, 4000);
    };

    isSequence(cpf) {
        const sequence = this.cpfClean[0].repeat(this.cpfClean.length);
        return sequence === this.cpfClean;
    }

    sumArray(cpfPartial) {
        const arrayDoCPF = Array.from(cpfPartial);
        let regressive = cpfPartial.length + 1;

        const sumArray = arrayDoCPF.reduce((ac, value)=> {
            ac += (Number(value) * regressive);
            regressive--;
            return ac;
        }, 0)
        
        return sumArray;
    }

    createDigit(cpfPartial) {
        const sumArray = this.sumArray(cpfPartial);
        const digit = 11 - (sumArray % 11);
        return digit> 9 ? 0 : digit;
    }

    valid() {
        if (typeof this.cpfPartial === undefined) {
            alert('Digite um CPF válido!')
            return;
        };
        if (this.cpfClean.length !== 11) {
            alert('Digite um CPF válido!')
            return;
        };
        if (this.isSequence()) {
            alert('Digite um CPF válido!')
            return;
        };

        const oneDigit = this.createDigit(this.cpfPartial);
        const twoDigit = this.createDigit(this.cpfPartial + oneDigit)
        const newCpf = this.cpfPartial + oneDigit + twoDigit;

        return newCpf === this.cpfClean ? 'VÁLIDO' : 'INVÁLIDO';
    }

    appendValidation() {
        if (typeof this.valid() == undefined) false;
        const spanCpf = document.querySelector('.info-cpf');
        const spanValidator = document.querySelector('.result-cpf');
        
        spanCpf.innerHTML = cpfDigit.value;
        spanValidator.innerHTML = this.valid();
        this.openResult()
    }

}




const cpfDigit = document.querySelector('#txtCpf');

document.addEventListener('click',
    e => {
        const el = e.target;
        const btn = el.classList.contains('btn')
        if (btn) {
            const valid = new Validator(cpfDigit.value);
            valid.valid();
            valid.appendValidation()
        }
    })

