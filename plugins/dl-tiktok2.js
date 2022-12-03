// const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper')
// let handler = async (m, { conn, args, usedPrefix, command }) => {
// 	if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
//     tiktokdl(args[0]).then(r => {
//     let video = r.video.no_watermark
//     conn.sendFile(m.chat, video, '', `*${wm}*`, m)
//     })
// }
// handler.help = ['tiktok'].map(v => v + ' <url>')
// handler.tags = ['downloader']


// handler.command = /^(tt|tiktok|tik)$/i

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply('Seddang di proses...')
let res = await fetch(`https://fatiharridho.herokuapp.com/api/downloader/tiktok?url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.result) throw json
let { username,caption,nowm } = json.result
await conn.sendFile(m.chat, nowm, '.mp4', `
ðŸ”˜ *username* : ${username}
ðŸ”˜ *caption* : ${caption}
ðŸ”˜ *Link Download* : ${nowm}
\n
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tt|tiktok)$/i
handler.limit = true

module.exports = handler
