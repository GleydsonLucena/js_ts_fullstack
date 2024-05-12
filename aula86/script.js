function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(e => {
            resolve(msg);
        }, tempo)
    })
}

esperaAi('OPa 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('OPa 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('OPa 3', rand(1, 3))
    }).then(resposta => {
        console.log(resposta)
    })
    .catch();

