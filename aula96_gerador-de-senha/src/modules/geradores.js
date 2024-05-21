const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const simbolos = '!"#$%&()*+,-./:;<=>?@[]^_{|}~';
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));
const geraSimbolo=()=> simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiuscula, minuscula, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maiuscula && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumeros());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}
