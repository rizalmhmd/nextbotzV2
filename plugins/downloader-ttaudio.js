let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'url nya mana ngenn?'
let res = await fetch(`https://api.zeeoneofc.xyz/api/downloader/tiktok?url=${args[0]}&apikey=YrxxzZel`)
 if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.audio, m)
}

handler.help = ['ttaudio <url>']
handler.tags = ['downloader']
handler.command = /^ttaudio$/i

export default handler
