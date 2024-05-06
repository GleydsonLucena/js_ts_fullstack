// 705.484.450-52 070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2 
70 0  40 28 48 20 16 15 0 = 23

11 - (237 % 11) = 5 (primeiro digito)
se o número digitado for 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2 
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (segundo digito)
se o número digitado for 9, consideramos 0.
*/

function CpfValidator(cpf) {
    Object.defineProperty(this, 'cpfClean', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}

CpfValidator.prototype.valid = function () {
    if (typeof cpfClean === undefined) return false;
    if (this.cpfClean.length !== 11) return false;
    if (this.isSequence()) return false;

    const cpfPartial = this.cpfClean.slice(0, -2);
    const digitOne = this.CreateDigit(cpfPartial);
    const digitTwo = this.CreateDigit(cpfPartial + digitOne);
    const newCpf = cpfPartial + digitOne + digitTwo;
    return newCpf === this.cpfClean ? 'Válido' : 'Inválido';
}

CpfValidator.prototype.CreateDigit =
    function (cpfPartial) {
        const arrayDoCPF = Array.from(cpfPartial);
        let regressiveCounter = arrayDoCPF.length + 1;
        let sumArray = arrayDoCPF.reduce(
            (ac, valor) => {
                ac += (regressiveCounter * Number(valor));
                regressiveCounter--
                return ac;
            }, 0)

        const digit = 11 - (sumArray % 11);
        return digit > 9 ? '0' : String(digit);
    }

CpfValidator.prototype.isSequence = function () {
    const sequence = this.cpfClean[0].repeat(this.cpfClean.length);
    return sequence === this.cpfClean;
}

// FUNÇÕES SEPARADAS

const appendValidation=(cpf, validator)=> {
    const cpfInformed = document.querySelector('#cpf-informed');
    const result = document.querySelector('#result');

    cpfInformed.innerHTML = `O CPF: ${cpf}`;
    result.innerHTML = ` é  ${validator}.`;
}

document.addEventListener('click', 
e => {
    const el = e.target;
     
    if(el.classList.contains('btn')) {
        if (!txtCpf) alert('Digite o CPF!')
        if (this.cpfClean > 11) alert('Digite um CPF válido!')

        const cpf = document.querySelector('#txtCpf').value;
        const validator = new CpfValidator(cpf);

        appendValidation(cpf, validator.valid());
    };
});


