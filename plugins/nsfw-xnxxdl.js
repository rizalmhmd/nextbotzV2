import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau download apa?\n\nContoh: ${usedPrefix + command} link xnxx`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!';
	try {
		let res = await fetch(`https://malesin.xyz/xnxxdl?url=${text}`)
		if (res.status !== 200) throw 'Nice'
    let w = await res.json()
    let x = w.result
    let caption = `*${htki} xnxxdl ${htka}*
    
*💌 title:* ${x.title}
*🗂️ info:* ${x.info}
*📊 duration:* ${x.duration}
    `
conn.sendFile(m.chat, x.files.low, 'asupan.mp4', caption, m)
} catch (e) {
		throw e;
	}
}
	
	
	
handler.help = ["xnxxdl"].map(v => v + ' <url>')
handler.tags = ["nsfw"]
handler.command = /^(xnxxdl|dlxnxx)$/i
handler.register = true
handler.premium = true

export default handler
