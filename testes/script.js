fetch('db.json')
    .then(resp => {
        return resp.json();
    })
    .then(json => {
        loadJson(json)
    });

const divContainer = document.querySelector('.container');
const divLivros = document.querySelector('.filme-container');
const imgCapaLivro = document.querySelector('.img-capa');
const infoDoLivro = document.querySelector('.info-livro');
const titulo = document.querySelector('.titulo');
const categoria = document.querySelector('.categoria');
const paginas = document.querySelector('.paginas');
const preco = document.querySelector('.preco');

function loadJson(json) {
    for (let livro of json.livros) {
        adicionaLivro(livro.imgCapa, livro.titulo, livro.categoria, livro.paginas, livro.preco);

    
        var divPai = document.querySelector('.div-livro');
        var div = divPai.firstChild;
        var divClone = div.cloneNode(true);
        divPai.appendChild(divClone);
        


    }
}

function adicionaLivro(imgCapa, tituloTxt, categoriaTxt, paginasTxt, precoTxt) {
    imgCapaLivro.src = imgCapa;
    titulo.innerHTML = tituloTxt;
    categoria.innerHTML = categoriaTxt;
    paginas.innerHTML = paginasTxt + ' Paginas';
    preco.innerHTML = 'R$' + precoTxt + ',00';
}

