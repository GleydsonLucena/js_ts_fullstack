validarMes = (mes) => {
    let mesTexto;

    if (mes === 0) {
        mesTexto = 'Janeiro';
    } else if (mes === 1) {
        mesTexto = 'Fevereiro';
    } else if (mes === 2) {
        mesTexto = 'Março';
    } else if (mes === 3) {
        mesTexto = 'Abril';
    } else if (mes === 4) {
        mesTexto = 'Maio';
    } else if (mes === 5) {
        mesTexto = 'Junho';
    } else if (mes === 6) {
        mesTexto = 'Julho';
    } else if (mes === 7) {
        mesTexto = 'Agosto';
    } else if (mes === 8) {
        mesTexto = 'Setembro';
    } else if (mes === 9) {
        mesTexto = 'Outubro';
    } else if (mes === 10) {
        mesTexto = 'Novembro';
    } else if (mes === 11) {
        mesTexto = 'Dezembro';
    } else {
        mesTexto = ''
    }

    return mesTexto
}

validarDiaDaSemana = (diaDaSemana) => {
    let diaDaSemanaTexto;

    if (diaDaSemana === 0) {
        diaDaSemanaTexto = 'Domingo';
    } else if (diaDaSemana === 1) {
        diaDaSemanaTexto = 'Segunda-Feira';
    } else if (diaDaSemana === 2) {
        diaDaSemanaTexto = 'Terça-Feira';
    } else if (diaDaSemana === 3) {
        diaDaSemanaTexto = 'Quarta-Feira';
    } else if (diaDaSemana === 4) {
        diaDaSemanaTexto = 'Quinta-Feira';
    } else if (diaDaSemana === 5) {
        diaDaSemanaTexto = 'Sexta-Feira';
    } else if (diaDaSemana === 6) {
        diaDaSemanaTexto = 'Sabado';
    } else {
        diaDaSemanaTexto = ''
    }

    return diaDaSemanaTexto
}

zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`
}

getDate = () => {
    const data = new Date()
    const diaDaSemana = data.getDay();
    const dia = zeroAEsquerda(data.getDate());
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    
    return `${validarDiaDaSemana(diaDaSemana)}, ${dia} de ${validarMes(mes)} de ${ano}, ${hora}:${min}`
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




