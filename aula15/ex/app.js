let num = prompt('Digte um número:');

num = Number(num);

const h1 = document.getElementById('tittle');
const p = document.getElementById('parag');

h1.innerHTML += `Seu número é ${num} <br />`
p.innerHTML += `Raiz Quadrada = ${(num ** 0.5).toFixed(2)} <br />`
p.innerHTML += `${num} é Inteiro? ${Number.isInteger(num)} <br />`
p.innerHTML += `NaN? ${Number.isNaN(num)} <br />`
p.innerHTML += `Arredondando para baixo: ${Math.floor(num)} <br />`
p.innerHTML += `Arredondando para cima: ${Math.ceil(num)} <br />`
p.innerHTML += `${num} com duas casas decimais: ${num.toFixed(2)} <br />`