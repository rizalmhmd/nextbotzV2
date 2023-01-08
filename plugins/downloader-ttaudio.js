import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, text }) => {
await m.reply(`*_Proses download Tiktok_*\n*_@${m.sender.split(`@`)[0]}_*`)
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://vt.tiktok.com/ZSJE2ffo4`)
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=cahyokun&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  
conn.sendFile(m.chat, x.audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: snh,
    mediaType: 2, 
    description: snh,
    title: "Nɪʜ...",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer(),
    sourceUrl: snh}}})
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
