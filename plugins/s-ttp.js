let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : 'teksnya mana?'
let sel = (`https://apimu.my.id/other/ttp?text=${teks}`)
 conn.sendFile(m.chat, sel, 'ttp.webp', 0,".s", m, {packname: packname, author: author, mentions: [m.semder]})
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

module.exports = handler
