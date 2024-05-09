class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.ligado} já ligado.`);
            return;
        }

        this.ligado = true;
    }    

    desligar() {
        if (!this.ligado) {
            console.log(`${this.ligado} já desligado!`);
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('MotoG');
