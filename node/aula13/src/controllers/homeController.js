
exports.paginaInicial =
    (req, res, next) => {
        res.render('index')
    }

exports.trataPost =
    (req, res) => {
        res.send('Ei sou sua nova rota de POST')
    }

    exports.rotaContato = 
    (req, res) => {
        res.send('Olá está é sua página de contato!')
    }