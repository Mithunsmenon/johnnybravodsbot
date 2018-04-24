const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first());
    if(tomute) return message.reply("Couldnt Find The User");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("LOL Cant Mute Them!");
    
      





}

module.exports.help = {
    name: "mute"
  }