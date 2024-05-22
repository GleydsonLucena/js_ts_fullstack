// import { nome , sobrenome, idade, soma, Pessoa } from './modulo1';


// console.log(nome, sobrenome, idade, soma(3, 2));

// const p1 = new Pessoa('Gleydson', 'Lucena');

// console.log(p1)

import * as module from './modulo1';

// console.log(module);?

const p1 = new module.Pessoa('Gleydson', 'Lucena');

console.log(module.soma(5, 5))
