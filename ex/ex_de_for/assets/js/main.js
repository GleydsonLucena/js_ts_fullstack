




criarTags = () => {
    const main = document.querySelector('.main-container');
    const elementos = [
        {tag:'p', texto: 'Frase 1'},
        {tag:'div', texto: 'Frase 2'},
        {tag:'footer', texto: 'Frase 3'},
        {tag:'section', texto: 'Frase 4'},
    ];
    const div = document.createElement('div');
    main.appendChild(div)

    for (let i=0; i < elementos.length; i++) {
        const tag = document.createElement(elementos[i].tag);
        const texto = elementos[i].texto;
        tag.innerHTML = texto;
        div.appendChild(tag);
    }

}
// // criarTags()