/**
O javaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo 
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função contrutora que foi usada para criá-lo. Quando o tentamos acessar um membro no próprio objeto, primeiro o motor do JS vai tentar encontrar este membro e demais a cadeia de proótipos .
*/

// Contrutora = Molde (classe)
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}


// Intância
const p1 = new Pessoa('Gleydson', 'Lucena');
const p2 = new Pessoa('Maria', 'Lucena');
const data = new Date();

Pessoa.prototype.estouAqui = 'HAHAHAHHA'

console.log(p1);