const pessoa = 'Gabriel'
fetch('pessoas.json')
    .then(resp => {
        return resp.json();
    })
    .then(json => {
        loadJson(json);
    });

function loadJson(json) {
    const table = document.createElement('table');

    const divJson = document.querySelector('.json-result');

    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.cpf;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);


        table.appendChild(tr)
    }

    divJson.appendChild(table);

}

