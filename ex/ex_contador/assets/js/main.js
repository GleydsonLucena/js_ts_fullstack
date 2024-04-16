const inciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
const contador = document.querySelector('.contador');

const cirarHoraDosSegundos=(segundos)=>{
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt:BR', {
        hour12: false
    })
}

inciar.addEventListener('click', (event)=>{
   console.log(cirarHoraDosSegundos(10000))
})
