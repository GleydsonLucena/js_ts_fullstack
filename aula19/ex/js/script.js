const txtnome = document.getElementById("txtnome");
const txtsobrenome = document.getElementById("txtsobrenome");
const txtpeso = document.getElementById("txtpeso");
const txtaltura = document.getElementById("txtaltura");

function criarPessoa (nome, sobrenome, peso, altura) {
    return { 
        nome, 
        sobrenome, 
        peso,
        altura 
    }
};

