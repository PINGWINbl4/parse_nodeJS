const {writeFile} = require('fs');
const {promisify} = require('util');
const writeFilePromise = promisify(writeFile);

async function downloadFile(url, fileName) {
    return fetch(url)
        .then(buf => buf.arrayBuffer())
        .then(buf => writeFilePromise(fileName, Buffer.from(buf)));
  }

module.exports = {
    downloadFile
}