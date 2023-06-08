const fs = require('fs');
const xml2js = require('xml2js');

async function parseXML(unzippedFileName){
    var list
    var parser = new xml2js.Parser();
    fs.readFile('./storage/'+unzippedFileName, 'utf-8', (err, data) => {
        
        if (err) {
          console.error(err);
          return;
        }

        parser.parseString(data, async (err, result)=>{
            list = result.ED807.BICDirectoryEntry
            for(let elementIndex in list){

                if(list[elementIndex].Accounts == undefined) {
                    delete list[elementIndex]
                }
                else{

                    list[elementIndex] = {
                        'bic': list[elementIndex].$.BIC,
                        'name': list[elementIndex].ParticipantInfo[0].$.NameP,
                        'corrAccount': list[elementIndex].Accounts[0].$.Account
                    }
                }
            }
        });        
        console.log(list)
    })
}

module.exports = {
    parseXML
}

//console.log(parseXML())