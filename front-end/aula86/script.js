function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false)
        }
        setTimeout(e => {
            resolve(msg);
        }, tempo)
    })
}

esperaAi(22222, rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('OPa 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('OPa 3', rand(1, 3))
    }).then(resposta => {
        console.log(resposta)
    }).then(()=> {
        console.log('Eu serei o ultimo a ser mostrado')
    })
    .catch(e => {
        console.log(e)
    });
console.log('Isso aqui sera ixibido antes do promisse');
