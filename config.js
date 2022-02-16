const fs = require('fs')

global.packName = '© IRJA'
global.authorName = 'IG : irja_official'
global.prefix = '.'
global.mode = 'publik'
global.ownerNumber = ['6282275576880','12202006957']
global.thumb = fs.readFileSync('./thumb.jpeg')

global.APIs = {
	zaki: 'https://api.kizakixd.xyz/api'
}
global.APIKeys = {
	'https://api.kizakixd.xyz/api': 'YSzmuRfXMV5Qa7bBeEwaT2g4e' //register buat dapetin api di : https://api.kizakixd.xyz/api
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`[UPDATE] '${__filename}'`)
    delete require.cache[file]
    require(file)
})
