const discord = require("discord.js");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`http://78.media.tumblr.com/tumblr_m2kp9gOFwQ1r30oy5o1_1280.jpg`);
    let catembed = new discord.RichEmbed()
  
    .setColor("#8300FF")
    .setTitle("CAT")
    
    message.channel.send(catembed);
}

    module.exports.help = {
        name: "cat"
      }