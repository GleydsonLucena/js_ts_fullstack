
document.addEventListener('click',
    e => {
        const el = e.target;
        const tag = el.tagName.toLowerCase();

        if (tag === 'a') {
            e.preventDefault();
            carregaPafina(el)
        }
    }
)

async function carregaPafina(el) {
    try {
        const href = el.getAttribute('href');
        const resp = await fetch(href);
    
        if(resp.status !== 200) throw new Error();
    
        const html = await resp.text();
        loadResult(html);
    } catch (e) {
        console.error(e)
    }
}

function loadResult(html) {
    const div = document.querySelector('.resultado');
    div.innerHTML = html;
}
