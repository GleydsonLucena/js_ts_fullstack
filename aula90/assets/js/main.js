
document.addEventListener('click',
    e => {
        const el = e.target;
        const tag = el.tagName.toLowerCase();

        if (tag === 'a') {
            e.preventDefault();
            carregaPafina(el)
            loadResult()
        }
    }
)

function carregaPafina(el) {
    const href = el.getAttribute('href');
    fetch(href)
        .then(resp => {
            if (resp.status !== 200) throw new Error('DEu ruim!');
            return resp.text()
                .then(html => {
                    loadResult(html);
                })
        })
        ;

}

function loadResult(html) {
    const div = document.querySelector('.resultado');
    div.innerHTML = html;
}
