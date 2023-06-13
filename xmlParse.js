const {downloadFile} = require("./utils/download")
const {unziping} = require("./utils/unzip")
const {parseXML} = require("./utils/parse")
const fs = require('fs')


const fileName = "./xml_file.zip"
const link = "http://www.cbr.ru/s/newbik" 


async function getBICList(link, fileName){
    await downloadFile(link, fileName)
    const unzippedFileName = await unziping(fileName)
    const parsedData = await parseXML(unzippedFileName)
    fs.unlink(fileName, ()=>{})
    fs.unlink(unzippedFileName, ()=>{})
    return parsedData
 
}
getBICList(link, fileName)