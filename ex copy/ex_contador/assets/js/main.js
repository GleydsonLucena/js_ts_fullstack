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

document.addEventListener('click', (e)=> {
    const el = e.target;
    if(el.classList.contains('iniciar')) {
        clearInterval(timer);
        inciarRelogio()
        contador.style.color = '#fff'
    }
    if(el.classList.contains('pausar')) {
        clearInterval(timer);
        contador.style.color = 'red';
    }
    if(el.classList.contains('zerar')) {
        clearInterval(timer);
        contador.innerHTML = '00:00:00';
        segundos = 0;
    }
})

relogio()