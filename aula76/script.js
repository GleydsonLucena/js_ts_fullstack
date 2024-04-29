//PRODUTO
////CAMISETA, CANECA, LAPIS

function Produto(nome, preco) 
{
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percent) {return this.preco + (this.preco * percent / 100);}

const p1 = new Produto('samisa', 10);
p1.aumento(20);

console.log(p1)