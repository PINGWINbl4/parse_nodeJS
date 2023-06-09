const fs = require('fs');
const xml2js = require('xml2js');
const iconv = require('iconv-lite')

async function parseXML(unzippedFileName){
    const parser = new xml2js.Parser();
    const file = await fs.promises.readFile('./storage/' + unzippedFileName, 'utf-8')
    const parsedContent = await parser.parseStringPromise(file);
    const list = parsedContent.ED807.BICDirectoryEntry;
    const currentBICList = []
    for(let elementIndex in list){
        for(let accIndex in list[elementIndex].Accounts){
            currentBICList.push({
                bic: list[elementIndex].$.BIC,
                name: iconv.decode(list[elementIndex].ParticipantInfo[0].$.NameP, 'koi8-ru'),
                corrAccount: list[elementIndex].Accounts[accIndex].$.Account
            })
        }
        }
    console.log(currentBICList);
    return currentBICList;
}

module.exports = {
    parseXML
}