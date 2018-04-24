const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor('#FF0000')
    .setThumbnail(bicon)
    .addField("Created By <@iCodeLife#0562>")
    .addField("Created On",bot.user.createdAt);
    
    return message.channel.send(botembed);
}

module.exports.help = {
    name: "info"
  }