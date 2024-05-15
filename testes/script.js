fetch('db.json')
    .then(resposta => {
        return resposta.json();
    })
    .then(livrosJson => loadJsonInPag(resposta));


function loadJsonInPag(json) {
    const divPagina = document.querySelector('.resultado');
    for (let livros of json) {
        console.log(livros)
    }
}