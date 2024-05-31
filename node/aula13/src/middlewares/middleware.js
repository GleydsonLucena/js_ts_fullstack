module.exports = (req, res, next) => {
    console.log();
    console.log('Meu middleware importado via js');
    console.log();

    next();
};