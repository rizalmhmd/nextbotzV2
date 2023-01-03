import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau download apa?\n\nContoh: ${usedPrefix + command} link xnxx`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!';
	try {
		let json = await fetch(`https://malesin.xyz/xnxxdl?url=${text}`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}
  *duration:* ${x.result.duration}
  *info:* ${x.result.info}
  *url:* ${x.result.URL}
  `
conn.sendFile(m.chat, x.result.files.low, 'asupan.mp4', caption, m)
	} catch (e) {
		throw e;
	}
}
handler.help = ["xnxxdl"].map(v => v + ' <url>')
handler.tags = ["nsfw"]
handler.command = /^(xnxxdl)$/i
handler.register = true
handler.premium = true

export default handler
