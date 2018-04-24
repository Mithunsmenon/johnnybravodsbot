const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kuser = message.guild.member(message.mentions.users.first());
    if(!kuser) return message.channel.send("Couldn't Find The User!");
    let kreason = args.slice(1).join(" ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Who Is This Non Mod Telling Me To Kick");
    if(kuser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Lol I Cant Kick Admins And You Know That Right?!");

        let kickembed = new discord.RichEmbed()
        .setDescription("Detective Johnnys Kicked This Guy")
        .setColor('#f20505')
        .addField("Kicked User",`${ruser} With ID: ${ruser.id}`)
        .addField("Kicked By ",`${message.author.id} With ID: ${message.author.id}`)
        .addField("Channel",message.channel)
        .addField("Time",message.createdAt)
        .addField("Reason", kreason);

let kickchannel = message.guild.channels.find('name',logchannel);
if(!kickchannel) return message.guild.channels.find("Couldn't Find The Logs Channel! :(");

message.guild.member(kuser).kick(kreason);
    kickchannel.send(kickembed);
}
 
module.exports.help = {
    name: "kick"
  }