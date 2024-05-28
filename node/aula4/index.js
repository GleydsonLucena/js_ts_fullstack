const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(__dirname);
    walk(files);
}

async function walk(files) {
    for (let file of files) {
        console.log(file);
    }
}

readdir('/home/gleydson/Documentos/GitHub/');