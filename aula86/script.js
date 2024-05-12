function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    setTimeout(e=> {
        console.log(msg);
    }, tempo)
} 

esperaAi('OPa 1', rand(1, 10));
esperaAi('OPa 2', rand(1, 10));
esperaAi('OPa 3', rand(1, 10));