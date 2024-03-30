const form = document.querySelector('.form');
const txtnome = document.getElementById("txtnome").value;
const txtsobrenome = document.getElementById("txtsobrenome").value;
const txtpeso = document.getElementById("txtpeso").value;
const txtaltura = document.getElementById("txtaltura").value;

form.onsubmit = function(evento) {
    
};

function criarPessoa (nome, sobrenome, peso, altura) {
    return { 
        nome, 
        sobrenome, 
        peso,
        altura 
    }
};

criarPessoa(txtnome, txtsobrenome, txtpeso, txtaltura);