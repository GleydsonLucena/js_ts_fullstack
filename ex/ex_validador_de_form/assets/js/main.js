class ValidadorForm {
    constructor (nome, sobrenome, usuario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.usuario = usuario;
    }
    mostra() {
        console.log(this.nome)
    }

    criaP() {
        const p = document.createElement('p');
        p.classList.add('fraseErro');
        return p;
    }

    indentDiv(classDiv) {
        const div = document.querySelector(`.${classDiv}`);
        return div;
    }

    inputClean(input) {
        const inputClean = `${input}`;
        return inputClean;
    }
}

const valid = new ValidadorForm(txtNome , 'sobrenome', 'usu');


