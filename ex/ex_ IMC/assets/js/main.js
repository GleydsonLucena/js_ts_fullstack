const form = document.querySelector('form');

form.addEventListener('submit', function pararSubmit (event) {
   event.preventDefault(); 
} )

const btn = document.querySelector('.btn');

function exibirResultado (imc) {
    const resultado = document.querySelector('.resultado');

    resultado.style.display = 'inline';

    if (imc <= 18.5) {
        resultado.innerHTML = `Seu IMC é ${imc} => Está abaixo do peso.`;
        resultado.style.background = 'yellow';
    } else if (imc >= 18.6 && imc <= 24,9) {
        resultado.innerHTML = `Seu IMC é ${imc} => Peso normal.`;
        resultado.style.background = 'green';
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `Seu IMC é ${imc} => Sobrepeso.`;
        resultado.style.background = 'red';
    } else if (imc >= 30 && imc <= 39.9) {
        resultado.innerHTML = `Seu IMC é ${imc} => Obesidade grau 1.`;
        resultado.style.background = 'red';
    } else if (imc >= 35 && imc < 40) {
        resultado.innerHTML = `Seu IMC é ${imc} => Obesidade grau 2.`;
        resultado.style.background = 'red';
    } else {
        resultado.innerHTML = `Seu IMC é ${imc} => Obesidade grau 3.`;
        resultado.style.background = 'red';
    }

}

function calcularImc(peso, altura) {
    let calc = peso / (altura * altura)
    return calc.toFixed(2);
}

btn.addEventListener('click', function cliqueiCalcular () {
    const peso = Number(document.querySelector('#txtpeso').value);
    const altura = Number(document.querySelector('#txtaltura').value);
    
    
    exibirResultado(calcularImc(peso, altura))
    
})









