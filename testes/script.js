fetch('db.json')
    .then(resp => {
        return resp.json();
    })
    .then(json => {
        loadJson(json)
    });

// function loadJson(json) {
//     const divJson = document.querySelector('.img-container');

//     for (livro of json.livros) {
//         const img = document.createElement('img');
//         img.setAttribute('src', livro.imgCapa);
//         divJson.appendChild(img);
//     }
// }

// function createDiv() {

// }