function criaCalculadora() {
    return {
        display: document.querySelector('.numbers'),

        caracters: document.querySelector('.caracters-container'),

        limparDisplay() {
            this.display.innerText = ''
        }, 

        apgarUm() {
            this.display.innerText = this.display.innerText.slice(0, -1);
        }
    }
}

function calcular() {
    const resultado = document.querySelector('.numbers').innerText;
    if (resultado) {
        document.querySelector('.numbers').innerHTML = eval(resultado);
    }
}

const calc = criaCalculadora();
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

    if (valor != 'C' && valor != '=') {
        calc.display.innerText += valor;
    }

    if (valor === '=') {
       calcular();
    }


}
)

