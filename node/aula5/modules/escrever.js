const fs = require('fs').promises;

module.exports = (caminho, file) => {
    fs.writeFile(caminho, file, { flag: 'w' });
}