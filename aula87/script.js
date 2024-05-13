function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(e => {
            if (typeof msg !== 'string') {
                reject('Deu ruim');
                return;
            }
            resolve(msg);
        }, tempo)
    })
}

//promisse.all Promisse.race Promisse.resolve Promisse.reject

const promises = [
    // 'primriro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
    // 'Outro valor'
];

function baixaPagina() {
    const emCache = true;
    if (emCache) {
        return Promise.reject('Pagina em cache!');
    } else {
        console.log('Baixando....')
        return esperaAi('Baixei a página!', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('Erro'));
