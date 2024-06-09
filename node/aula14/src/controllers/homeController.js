const HomeModel = require('..models/HomeModel')

HomeModel.create( { 
    titulo: 'Um titulo de testes', 
    descricao:  'Uma descricao de testes'
}).then(dados=>;

exports.paginaInicial =
    (req, res) => {
        res.render('index');
        return;
    }

exports.trataPost =
    (req, res) => {
        res.send(req.body);
        return;
    }