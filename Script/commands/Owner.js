const request = require("request");
const fs = require("fs-extra");
module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐀𝐏𝐓𝐈𝐍☃︎𝐑𝐀𝐁𝐁𝐈♲︎︎︎𝐕𝐀𝐈",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};
module.exports.run = async function ({ api, event }) {
  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝐂𝐀𝐏𝐓𝐈𝐍☃︎𝐑𝐀𝐁𝐁𝐈♲︎︎︎𝐕𝐀𝐈
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐑𝐀𝐁𝐁𝐈
║ 🎂 𝗔𝗴𝗲 : 19+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 🖕🖕
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 🖕🖕
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : kataliya 
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ fb.com/61560826956875
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/61560826956875
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
