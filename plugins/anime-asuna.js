import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.xyz/api/anime/asuna-yuki?apikey=YrxxzZel'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(asuna)$/i
handler.tags = ['anime']
handler.help = ['asuna']
handler.premium = false
handler.limit = true

export default handler
