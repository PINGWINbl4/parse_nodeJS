const fs = require('fs');
const xml2js = require('xml2js');

async function parseXML(unzippedFileName){
    const parser = new xml2js.Parser();
    const file = await fs.promises.readFile(unzippedFileName)
    const parsedContent = await parser.parseStringPromise(file);
    const list = parsedContent.ED807.BICDirectoryEntry;
    const currentBICList = []
    for(let elementIndex in list){
        for(let accIndex in list[elementIndex].Accounts){
            currentBICList.push({
                bic: list[elementIndex].$.BIC,
                name: list[elementIndex].ParticipantInfo[0].$.NameP,
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