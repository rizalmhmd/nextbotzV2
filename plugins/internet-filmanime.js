import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)

	let res = await fetch(`https://api.lolhuman.xyz/api/lk21?apikey=ee99d6df5f8c5eaf7667a90d&query=${text}`)
	 let jsons = await res.json()
	 let x = jsons.result
	 
let hasil = `🎥Film Dari : ${x.title}
🔖Genre: : ${x.genre}
🔖Views: : ${x.views}
🔖Duration: : ${x.duration}
🔖Tahun: : ${x.tahun}
🔖Location: : ${x.location}
🔖Rilis: : ${x.date_release}
🔖Bahasa: : ${x.language}
⭐Rating : ${x.rating}

🎥Link Movie : ${x.link_dl}
Link : ${x.link}

📖Sinopsis : ${x.desc}`
    conn.sendButton(m.chat, x.thumbnail, hasil, '© 𝙕𝘼𝙇𝙇𝙭𝘽𝙊𝙏𝙕', 'Internet', '.? internet', m)
}
handler.help = ['filmanime', 'film'].map(v => v + '<film>')
handler.tags = ['internet', 'anime']

handler.command = /^film(anime)?$/i

handler.limit = true

export default handler
