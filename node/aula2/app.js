const cachorro = require('./mod');

const loki = new cachorro('Loki');

// loki.latir();

const { latir } = cachorro;

console.log(latir())
