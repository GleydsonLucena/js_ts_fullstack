class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //métodos insstância

    aumentarVolume () {
        this.volume += 2;
    }
    diminuirVolume () {
        this.volume -= 2;
    }

    //métodos estático

    static trocaPilha() {
        console.log('Ok, vou trocar!')
    }


}

const cnt = new ControleRemoto('LG');

cnt.aumentarVolume();
cnt.aumentarVolume();
cnt.aumentarVolume();

console.log(cnt)

ControleRemoto.trocaPilha()


