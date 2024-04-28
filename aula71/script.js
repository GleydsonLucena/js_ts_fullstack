//defineProperty - defineProperties
function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;
    

    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode modificar/ alterar
        configurable: false // pode reconfigurar a chave
        
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5
console.log(p1);