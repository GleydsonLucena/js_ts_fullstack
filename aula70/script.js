//new Array(); []

const array = new Array(1, 2, 3, 4, 5, 6);

// new Object();

const pessoa1 = new Object();
pessoa1.nome = 'Gleydson';
pessoa1.sobrenome = 'Lucena';

const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otavio';

console.log(pessoa1);
console.log(pessoa2);

delete pessoa1.nome;

console.log(pessoa1);