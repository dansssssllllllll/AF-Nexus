export default {
  config: {
    name: 'about',
    description: 'Displays information about the bot and its owners',
category: ' info',
    usage: '(prefix)about',
    permission: 0,
    author: "Frank kaumba x Asta"
  },

  Nexus: async ({ nexusMessage }) => {
    const botInfo = `
╭━━━━━━━━━╮
┃  AUTOBOT 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾  
┃━━━━━━━━━━
┃ 🤖 Bot Name: NULL
┃ 🌟 Version: 1.0.0
┃ 🔧 Prefix: /
┃
┃ 👑 𝙾𝚆𝙽𝙴𝚁𝚂:
┃ • Daniel
┃   └╼ https://www.facebook.com/61554405703021
┃
┃ 📚 𝚁𝙴𝚂𝙾𝚄𝚁𝙲𝙴𝚂:
┃ • Commands: Use help cmd
┃
┃ 💝 Thanks for using
┃   my Bot!
╰━━━━━━━━━╯`.trim()
    return nexusMessage.reply(botInfo);
  }
};
