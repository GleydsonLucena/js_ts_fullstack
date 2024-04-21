function Calculadora() {
    this.display = document.querySelector('.numbers');
    this.caracters = document.querySelector('.caracters-container');

    // METODOS

    this.limparDisplay = () => this.display.innerText = '';

    this.apgarUm = () => this.display.innerText = this.display.innerText.slice(0, -1);

    this.calcular = () => {
        const resultado = document.querySelector('.numbers').innerText;
        if (resultado) document.querySelector('.numbers').innerHTML = eval(resultado);
    };

    this.pressionarEnter = () => {
        document.addEventListener('keydown', e => {
            if (e.key == 'Enter') {
                this.calcular();
            }
        })
    };
    

    this.digitarNumeros = () => {
        document.addEventListener('keydown', e=> {
            const tecla = e.key;
            
            if (tecla === 'Backspace' || tecla === 'Delete' || tecla === 'Enter') {
                this.apgarUm();
                return;
            }
            return this.display.innerText += tecla
        })
    }
}

const calc = new Calculadora();
calc.digitarNumeros()

calc.caracters.addEventListener('click', e => {
    const el = e.target;
    const valor = e.target.innerText;

    if (el.classList.contains('delet')) {
        calc.apgarUm();
    }

    if (!el.classList.contains('caracters')) {
        return;
    }

    if (valor === 'C') {
        calc.limparDisplay();
    }

    if (valor != 'C' && valor != '=' && valor != 'backspace') {
        calc.display.innerText += valor;
    }

    if (valor === '=') {
        calc.calcular();
        calc.pressionarEnter();
    }
}
)