zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`
}

getDate = () => {
    const data = new Date()
    const diaDaSemana = data.getDay();
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    
    return `${diaDaSemana}, ${dia} de ${mes} de ${ano}, ${hora}:${min}`
}

criarP = () => {
    const p = document.createElement('p');
    return p
}

mostrarData = () => {
    const h1 = document.querySelector('.data');
    const p = criarP();
    h1.appendChild(p)
    p.innerHTML = getDate();

} 

mostrarData()




