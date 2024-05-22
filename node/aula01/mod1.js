const nome = 'Gleudson';
const sobrenome = 'Lucena';
const idade = 23;

opa=()=> {
    console.log(nome + sobrenome + idade);
}

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;

console.log(module.exports);

this.nome = nome;
this.sobrenome = sobrenome;
this.opa = opa;

console.log(module.exports);
