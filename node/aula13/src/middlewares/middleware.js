module.exports = (req, res, next) => {
    if (req.body.nome) {
        console.log();
        console.log(`VI q vc postou ${req.body.sobrenome}`)
        console.log();
    }

    next();
};