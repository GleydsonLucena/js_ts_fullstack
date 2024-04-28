//defineProperty - defineProperties
function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;
    

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        value: estoque
    })
}

const p1 = new Produto('Camiseta', 20, 3);

console.log(p1);