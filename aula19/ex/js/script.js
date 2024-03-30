function meuEscopo() {
    const form = document.querySelector('.form');
    const dados = document.querySelector('.dados');

    form.addEventListener('submit', eventoEnviar=(evento)=> {
        evento.preventDefault();
        const nome = document.getElementById('txtnome');
        const sobrenome = document.getElementById('txtsobrenome');
        const peso = document.getElementById('txtpeso');
        const altura = document.getElementById('txtaltura');

        let pessoas = [];

        function cirarPessoa (nome, sobrenome, peso, altura) {
            pessoa = {
            nome,
            sobrenome, 
            peso,
            altura
            };

            pessoas.unshift(pessoa);
            pessoa = ''
        } 
        let pessoa = cirarPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        
        const dados = document.querySelector('dados');
        
        dados.innerHTML = `<p>${nome.value} ${sobrenome.value}  ${peso.value} ${altura.value}</p>`
    });
}