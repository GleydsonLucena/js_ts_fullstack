const inciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
const contador = document.querySelector('.contador');

const contarSegundos=(segundos)=> {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC'
    });
} 
let timer;
let segundos = 0;
const inciarRelogio=()=> {
    timer = setInterval(()=> {
        segundos++
        contador.innerHTML = contarSegundos(segundos);
        
    }, 1000);
}

inciar.addEventListener('click', (event)=>{
    clearInterval(timer);
   inciarRelogio()
   contador.style.color = '#fff'
})

pausar.addEventListener('click', (event)=> {
    clearInterval(timer);
    contador.style.color = 'red';
})

zerar.addEventListener('click', (event)=> {
    clearInterval(timer);
    contador.innerHTML = '00:00:00';
    segundos = 0;
})
