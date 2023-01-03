import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/sfw/waifu?apikey=8e66d0934cf741bfd2182c16'
	conn.sendButton(m.chat, 'Waifu Nya Kak (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(waifu)$/i
handler.tags = ['anime']
handler.help = ['waifu']
handler.premium = false
handler.limit = true

export default handler
