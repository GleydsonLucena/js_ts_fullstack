// //defineProperty - getters e setters
// function Produto(nome, preço, estoque) {
//     this.nome = nome;
//     this.preço = preço;
    

//     Object.defineProperty(this, 'estoque', {
//         enumerable:true, // mostra a chave
//         configurable: false, // pode reconfigurar a chave
//         get: function() {return estoque},
//         set: function(valor) {
//             if (typeof valor != 'number') {
//                 console.log('bad value');
//             }
//             estoque = valor;
//         }
//     })
// }

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

const p1 = new Produto('Camiseta', 20, 3);
const p2 = criaProduto('Camisa');
console.log(p1)

