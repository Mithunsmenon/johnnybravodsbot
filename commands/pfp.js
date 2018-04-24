
const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let uicon = message.author.avatarURL;
    let usembed = new discord.RichEmbed()
        .setDescription("User Avatar")
        .setColor("#293FF3")
        .setImage(uicon)
    return message.channel.send(usembed);
}

module.exports.help = {
    name: "pfp"
  }