//PRODUTO
////CAMISETA, CANECA, LAPIS

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percent) {this.preco = this.preco + (this.preco *(percent / 100));}
Produto.prototype.desconto = function(percent) {this.preco = this.preco - (this.preco *(percent / 100));}


const p1 = new Produto('samisa', 10);
p1.aumento(20);


function Caneca(nome, preco, material, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    this.estoque = estoque;
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true, 
    get: function () {
        return estoque
    },
    set: function(valor) {
        if (typeof valor !== 'number') return;
        estoque = valor;
    }
})

const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.aumento(100);
caneca.estoque = '100';

// console.log(caneca)

