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
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulario enviado')
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('#txt-senha');
        const repetirSenha = this.formulario.querySelector('#txt-repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.erro(senha, 'Campos senha e repetir senha precisam ser iguais!');
            this.erro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais!');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid= false;
            this.erro(senha, 'A senha precisa está entre 6 e 12 caracters!')
        }

        return valid;

    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.fraseErro')) {
            errorText.remove();
        }


        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.erro(campo, `Campo "${label}" nã pode estar em branco!`)
                valid = false;
            }

            if (campo.classList.contains('txt-cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true
        if (usuario.length < 3 || usuario.length > 12) {
            this.erro(campo, 'Usuário precisa ter entre 3 e 12 caracters!')
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.erro(campo, 'Usuário precisa conter apenas letras e/ou números!')
            valid = false;
        }
        return valid;
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