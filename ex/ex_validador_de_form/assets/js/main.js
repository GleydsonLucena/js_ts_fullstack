class ValidatorForm {
    constructor(nome, sobrenome, usuario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.usuario = usuario;
        
    }

    
    regex = /\W|_/;
    
    criaP() {
        const p = document.createElement('p');
        p.classList.add('fraseErro')
        return p;
    }

    IndentDiv(classDaDiv) {return document.querySelector(`.${classDaDiv}`)}

    validCaracter() {
        if (this.regex.test(this.nome)) {
            
            const p = this.criaP();
            p.innerText = 'Digite um nome válido (apenas letras/números)';
            return this.IndentDiv();
        }
        return true
    }

    validMinMixCaracter() {
        if (this.nome.length < 3 || this.nome.length > 12) return false;
        if (this.sobrenome.length < 3 || this.sobrenome.length > 12) return false;
        if (this.usuario.length < 3 || this.usuario.length > 12) return false;

        return true;
    }
}

const nometxt = document.getElementById('txtnome');

const valid = new ValidatorForm(nometxt.value, 'lucena', 'guimaraes');
document.addEventListener('click',
e => {
    const el = e.target;
    const btn = el.classList.contains('btn');
    if (btn) {
        valid.validCaracter();
        
        }
    }
)



