// IIFE => Immediately invoked function expression

(()=>{
    const nome = 'Luiz'
    console.log(nome)

    const sobrenome = 'Lucena'
    function falanome(nome){
        return `${nome} ${sobrenome}`  
    }

    function falaTudo() {
        return falanome()
    }

    console.log(falaTudo());
})()

