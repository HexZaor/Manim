let handler = async (m, { conn }) => {
	let emot = conn.pickRandom([""])
    conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
}
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|m(ung)?k(i)?n|affa?h|br?o)/i
handler.command = new RegExp

module.exports = handler
