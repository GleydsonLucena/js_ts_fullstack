const form = document.querySelector('form');

form.addEventListener('submit', function pararSubmit (event) {
   event.preventDefault(); 
} )

const btn = document.querySelector('.btn');

btn.addEventListener('click', function cliqueiCalcular () {
    const peso = Number(document.querySelector('#txtpeso').value);
    const altura = Number(document.querySelector('#txtaltura').value);
    
    console.log(peso / (altura ** 1/2))
})

