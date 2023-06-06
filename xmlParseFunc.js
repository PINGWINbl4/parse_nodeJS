//=========================GET_FUNCS====================\\
const {downloadFile} = require("./utils/download")
const {unziping} = require("./utils/unzip")
const {parseXML} = require("./utils/parse")
//========================CONSTS========================\\
const fileName = "./xml_file.zip"
const link = "http://www.cbr.ru/s/newbik" 


//========================MAIN==========================\\

async function getBICList(){
    await downloadFile(link, fileName)
    const unzippedFiles = await unziping(fileName)
    await parseXML(unzippedFiles)
}
getBICList()