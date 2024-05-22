function Produto (nome, preco) 
{
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 100);
const p2 = {nome: 'Caneca', preco: 15};

Object.setPrototypeOf(p2, Produto.prototype);
p1.aumento(100)
p2.aumento(50)

console.log(p1)
