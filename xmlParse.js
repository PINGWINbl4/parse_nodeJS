const {downloadFile} = require("./utils/download")
const {unziping} = require("./utils/unzip")
const {parseXML} = require("./utils/parse")


const fileName = "./xml_file.zip"
const link = "http://www.cbr.ru/s/newbik" 


async function getBICList(link, fileName){
    await downloadFile(link, fileName)
    let unzippedFileName = await unziping(fileName)
    return await parseXML(unzippedFileName)
 
}
getBICList(link, fileName)