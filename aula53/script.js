function retornaFuncao(nome) {
    return ()=> {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');

console.dir(funcao('joao'))