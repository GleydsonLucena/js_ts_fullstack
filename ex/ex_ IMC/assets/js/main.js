const form = document.querySelector(".form");
const botao = document.querySelector(".btn");

// FUNÇÕES

function calcularImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(1)
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

    console.log(calcularImc(peso, altura));
})