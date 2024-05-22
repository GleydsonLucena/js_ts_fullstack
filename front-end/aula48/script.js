const mostrarHora=()=> {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}

const timer = setInterval(() => {console.log(mostrarHora())}, 1000)

setTimeout(()=>{clearInterval(timer)}, 10000);

setTimeout(()=>{console.log('Ola, Mundo!')}, 15000);



