
exports.paginaInicial =
    (req, res) => {
        console.log(req.session.usuario);
        res.render('index');
        return;
    }

exports.trataPost =
    (req, res) => {
        res.send(req.body);
        return;
    }