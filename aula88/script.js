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

            resolve(msg.toUpperCase());
            return;
        }, tempo)
    })
}


