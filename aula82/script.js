class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado!`);
            return;
        }

        this.ligado = false;
    }
}


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};

class Computadores extends DispositivoEletronico {
    constructor(nome, GPU, CPU, monitor, teclado, mouse) {
        super(nome);
        this.GPU = GPU;
        this.CPU = CPU;
        this.monitor = monitor;
        this.teclado = teclado;
        this.mouse = mouse;
    }
}

const p1 = new Computadores('Asus', 'RX580', 'Xeon', 'New Hero', 'Fortrek', 'Logitech');
p1.ligar()
p1.ligar()
console.log(p1)