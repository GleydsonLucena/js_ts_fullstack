const form = document.querySelector(".form");
const botao = document.querySelector(".btn");

// FUNÇÕES

function calcularImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(1)
}

function criarClass (imc) {
    if (imc <= 18.5) {
        return 'amarelo'
    } else if (imc >= 18.6 && imc <= 24.9) {
        return 'verde'
    } else if (imc >= 25) {
        return 'vermelho'
    }
}

function criarParagrafo () {
    const p = document.createElement("p");
    return p
}

function validadorImc (imc) {
    if (imc <= 18.5) {
        return 'Abaixo do peso'
    } else if (imc >= 18.6 && imc <= 24.9) {
        return 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau 1'
    }  else if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau 2'
    } else {
        return 'Obesidade grau 3'
    }
}

function exibirResultado (msg) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = '';
    const p = criarParagrafo();
    resultado.appendChild(p)
    p.classList.add('caixa-form');
    p.classList.add(criarClass(msg));

    const tipoImc = validadorImc(msg)

    // // p.innerHTML = `Seu IMC é ${msg} -> ${tipoImc}`;
}
// EVENTOS

form.addEventListener("submit", previnirSubmit = (event) => {
    event.preventDefault();
})

botao.addEventListener("click", cliqueiCalcular = () => {
    
    const inputPeso = document.querySelector("#txtpeso");
    const inputAltura = document.querySelector("#txtaltura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        return alert('Peso inválido')
    }
    if (!altura) {
        return alert('Altura inválido!')
    }

    exibirResultado(calcularImc(peso, altura));
})