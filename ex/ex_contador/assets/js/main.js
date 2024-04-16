const inciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
const contador = document.querySelector('.contador');

inciar.addEventListener('click', (event)=>{
   setInterval(()=> {
        const data = new Date('1:1:1970')
    }, 1000)
})
