const fs = require('fs')

global.packName = '© IRJA'
global.authorName = 'Yotsuba - Bot'
global.prefix = '#'
global.mode = 'publik'
global.ownerNumber = ['687813379','6285878313791']
global.thumb = fs.readFileSync('./thumb.jpeg')

global.APIs = {
	zaki: 'https://api.kizakixd.xyz/api'
}
global.APIKeys = {
	'https://api.kizakixd.xyz/api': 'Your_Apikey' //register buat dapetin api di : https://api.kizakixd.xyz/api
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`[UPDATE] '${__filename}'`)
    delete require.cache[file]
    require(file)
})
