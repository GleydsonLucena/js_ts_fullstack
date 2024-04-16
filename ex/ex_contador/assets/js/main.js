const inciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
const contador = document.querySelector('.contador');

inciar.addEventListener('click', (event)=>{
    let contador1 = 0;
    let numeros = `00:00:0`
   setInterval(()=> {
    const data = new Date('00:00:00');
    
    
    contador.innerHTML = data
    }, 1000)
})
