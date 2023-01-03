import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/elaina?apikey=8e66d0934cf741bfd2182c16'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(elaina)$/i
handler.tags = ['anime']
handler.help = ['elaina']
handler.premium = false
handler.limit = true

export default handler
