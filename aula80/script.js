const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();
for(const {id, nome} of pessoas){
    novasPessoas.set(id, {...{id, nome}});
};

for (const p of novasPessoas) {
    console.log(p)
}