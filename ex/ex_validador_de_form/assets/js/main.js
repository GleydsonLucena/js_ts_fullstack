class ValidarFormulário {
    constructor() {
        this.formulario = document.querySelector('.form');
        this.evento();
    }

    evento() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.fraseErro')) {
            errorText.remove();
        }
        

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.erro(campo, `Campo "${label}" nã pode estar em branco!`)
                valid = false;
            }

            if (campo.classList.contains('txt-cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario'))
            
        }
    }

    validaCPF(campo) {
        const cpf = new ValidatorCPF(campo.value);
        if (!cpf.valid()) {
            this.erro(campo, 'CPF inválido!')
        }
        return true
    }
 
    erro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('fraseErro');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidarFormulário();