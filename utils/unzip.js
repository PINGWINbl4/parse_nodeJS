const AdmZip = require('adm-zip')

async function unziping(fileName){
    const zip = new AdmZip(fileName)
    zip.extractAllTo("./storage")
    const zipFiles = zip.getEntries()
    return zipFiles[0].entryName
}

module.exports = {
    unziping
}