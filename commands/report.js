const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let ruser = message.guild.member(message.mentions.users.first());
    if(!ruser) return message.channel.send("Couldn't Find The User!");
    let reason = args.slice(1).join(" ");
    let reportembed = new discord.RichEmbed()

        .setDescription("Detective Johnnys Crime Reports")
        .setColor('#f20505')
        .addField("Reported User",`${ruser} With ID: ${ruser.id}`)
        .addField("Reported By ",`${message.author} With ID: ${message.author.id}`)
        .addField("Channel",message.channel)
        .addField("Time",message.createdAt)
        .addField("Reason", reason);

    var logchannel = "logs";   
    let reportschannel = message.guild.channels.find('name',logchannel);
    if(!reportschannel) return message.guild.channels.find("Couldn't Find The Logs Channel! :(");
    
    message.delete().catch(O_o=>{});
    reportschannel.send(reportembed);

}
 
module.exports.help = {
  name: "report"
}