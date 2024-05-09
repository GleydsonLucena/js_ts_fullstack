class ValidatorForm {
    constructor(nome, sobrenome, usuario) {
        this.nome = nome; 
        this.sobrenome = sobrenome;
        this.usuario = usuario;
    }

    validCaracter() {
        if(this.nome.replace(/[^a-z0-9]/gi, '') !== this.nome){
           
            return alert('Digite um nome válido');;
        };
        if(this.sobrenome.replace(/[^a-z0-9]/gi, '') !== this.sobrenome) return false;
        if(this.usuario.replace(/[^a-z0-9]/gi, '') !== this.usuario )return false;
        return true;
    }

    validMinMixCaracter() {
        if (this.nome.length < 3 || this.nome.length > 12) return false;
        if (this.sobrenome.length < 3 || this.sobrenome.length > 12) return false;
        if (this.usuario.length < 3 || this.usuario.length > 12) return false;

        return true;
    }
}


document.addEventListener('click', 
e => {
    const el = e.target;
    const btn = el.classList.contains('btn');
    const valid = new ValidatorForm('gleydson', 'luveca', 'gleydsonCo');
        if(btn) {
            valid.validCaracter();
        }

    }
)
