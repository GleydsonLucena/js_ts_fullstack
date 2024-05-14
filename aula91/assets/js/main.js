const pessoa = 'Gabriel'
fetch('pessoas.json')
    .then(resp => {
        return resp.json();
    })
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            if (json[i].nome === pessoa) {
                console.log(json[i])
            }
        }
    }
    )


