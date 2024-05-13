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

async function executa() {
    try {
        const Fase1 = await esperaAi('Fase 1', rand(0, 3));
        console.log(Fase1);
        const Fase2 = await esperaAi('Fase 2', rand(0, 3));
        console.log(Fase2);
        const Fase3 = await esperaAi('Fase 3', rand(0, 3));
        console.log(Fase3);
    } catch(e) {
        console.log(e)
    }

};

executa();

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand(0, 3))
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 3', rand(0, 3))
//     })
//     .then(valor=> {
//         console.log(valor);
//     })

