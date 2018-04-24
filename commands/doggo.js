const discord = require("discord.js");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);
    let dogembed = new discord.RichEmbed()
  
    .setColor("#8300FF")
    .setTitle("DOGGO")
    .setImage(body.url);
    message.channel.send(dogembed);


    



}

    module.exports.help = {
        name: "doggo"
      }