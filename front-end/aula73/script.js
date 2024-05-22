const produto = {nome: 'Produto', preço: 1.8};

const caneca = Object.assign({}, produto);

console.log(Object.entries(produto));
for (let i of Object.entries(produto)) {
    // console.log(entries)
}

