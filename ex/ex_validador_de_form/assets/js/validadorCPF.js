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

class ValidatorCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfFull', {
                value: cpf.replace(/\D+/g, ''),
                writable: false, 
                enumerable: false, 
                configurable: false
            });

        Object.defineProperty(this, 'cpf', {
            value: this.cpfFull.slice(0, -2),
            writable: false, 
            enumerable: false, 
            configurable: false
        });
    };

    valid() {
        if (!this.cpfFull) return false;
        if (typeof this.cpfFull !== 'string') return false;
        if (this.cpfFull.length !== 11) return false;
        if (this.isSequence()) return false;

        const oneDigit = this.createDigit(this.cpf);
        const twoDigit = this.createDigit(this.cpf + oneDigit);
        const newCpf = this.cpf + oneDigit + twoDigit;
        return this.cpfFull === newCpf ? 'VÁLIDO' : 'INVÁLIDO';
    };

    sumArray(cpf) {
        const arrayDoCPF = Array.from(cpf);
        let regressive = arrayDoCPF.length + 1
        const sum = arrayDoCPF.reduce(
            (ac, value) => {
                ac += (regressive * Number(value));
                regressive--
                return ac
            }, 0)
        return sum;
    };

    createDigit(cpf) {
        const digit = 11 - (this.sumArray(cpf) % 11);
        return digit > 9 ? 0 : digit;
    }

    isSequence() {
        const sequence = this.cpf[1].repeat(this.cpf.length + 2);
        return sequence === this.cpfFull ? true : false;
    }
}



