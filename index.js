const dbd = require("dbd.js")
const Database = require("@replit/database")

const bot = new dbd.Bot({
token: "ODM0NDY3MTQ4MTg5MTM5MDA1.YIBUFw.bf7iB8_D_Xslx_Jt3gzatipZhW4", //Discord Bot Token
prefix: "e!" //Customizable
})

bot.onMessage() //Allows to run Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `$ping Pong!` //Code
});

bot.status({
  text: 'Elijah Testing Stuffs!',

  type: 'PLAYING',

  status: 'online',
});
bot.command({
name: "play", //Trigger name (command name)
code: `$playSong[song;leave vc time;defean (yes or no);leave when vc empty (yes/no);error]`
//Code
});