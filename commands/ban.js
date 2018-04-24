const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let buser = message.guild.member(message.mentions.users.first());
      if(!buser) return message.channel.send("Couldn't Find The User!");
      let breason = args.slice(1).join(" ");
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Who Is This Non Mod Telling Me To Ban");
      if(buser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Lol I Cant Ban Admins And You Know That Right?!");
      
      let banembed = new discord.RichEmbed()
          .setDescription("Detective Johnnys Kicked This Guy")
          .setColor('#f20505')
          .addField("Banned User",`${ruser} With ID: ${ruser.id}`)
          .addField("Banned By ",`${message.author.id} With ID: ${message.author.id}`)
          .addField("Channel",message.channel)
          .addField("Time",message.createdAt)
          .addField("Reason", breason);
      
      let banchannel = message.guild.channels.find('name',logchannel);
      if(!banchannel) return message.guild.channels.find("Couldn't Find The Logs Channel! :(");
      message.guild.member(buser).kick(breason); 
      banchannel.send(banembed);
}
module.exports.help = {
    name: "ban"
  }