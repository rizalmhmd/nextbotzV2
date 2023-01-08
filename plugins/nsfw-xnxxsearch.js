import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokep🐒`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!\nawas jangan nonton beginian ya dek, nanti aku bilangin ke ibu kamu loh ><';
	try {
		let f = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=cahyokun&query=${text}`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
views: ${v.views}
duration: ${v.duration}
uploader: ${v.uploader}
link: ${v.link}`.trim()
`
cap +=  '\n' + '••••••••••••••••••••••••' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["xnxxsearch"].map(v => v + ' <query>')
handler.tags = ["nsfw"]
handler.command = /^xnxxsearch|xnxxs$/i

handler.register = true
handler.premium = true

export default handler
