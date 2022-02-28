const fs = require('fs')

global.packName = '© IRJA'
global.authorName = 'IG : irja_official'
global.prefix = '.'
global.mode = 'publik'
global.ownerNumber = ['6282275576880','12202006957']
global.thumb = fs.readFileSync('./thumb.jpeg')

global.APIs = {
	zaki: 'https://api.neoxr.eu.org/'
}
global.APIKeys = {
	'https://api.neoxr.eu.org/': 'N0xSU8Yvu6' //register buat dapetin api di : https://api.kizakixd.xyz/api
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`[UPDATE] '${__filename}'`)
    delete require.cache[file]
    require(file)
})
