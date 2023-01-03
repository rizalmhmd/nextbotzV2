let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/kanna?apikey=8e66d0934cf741bfd2182c16', '', '', m)
}
handler.help = ['kanna']
handler.tags = ['anime']
handler.command = /^(kanna)$/i

export default handler 
