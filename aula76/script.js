//PRODUTO
////CAMISETA, CANECA, LAPIS

function Produto(nome, preco) 
{
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = (percent) => preco - (preco * (percent / 100)); 

const p1 = new Produto
console.log()