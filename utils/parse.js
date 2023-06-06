const fs = require('fs');
const { writeFile } = require('fs/promises');
const xml2js = require('xml2js');

async function parseXML(unzippedFiles){
    //console.log(unzippedFiles)
    var parser = new xml2js.Parser();
    var neededData = []

    fs.readFile('./storage/'+unzippedFiles, 'utf8', (err, data) => {
        
        if (err) {
          console.error(err);
          return;
        }

        parser.parseString(data, function(err, result){
            const list = result["ED807"]["BICDirectoryEntry"]
            for(let elementIndex in list){
                const element = result["ED807"]["BICDirectoryEntry"][elementIndex]
                
                if(element["Accounts"] == undefined) delete element
            } 

            console.dir(result['ED807']['BICDirectoryEntry']);
            return result['ED807']['BICDirectoryEntry']
        });
})
}

module.exports = {
    parseXML
}