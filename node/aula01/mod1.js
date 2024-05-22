const nome = 'Gleudson';
const sobrenome = 'Lucena';
const idade = 23;

opa=()=> nome + ' ' + sobrenome + ' ' + idade;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;

this.nome = nome;
this.sobrenome = sobrenome;
this.opa = opa;

