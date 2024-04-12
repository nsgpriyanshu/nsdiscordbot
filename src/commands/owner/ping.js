const { EmbedBuilder } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "ping",
  aliases: ["p", "P", "Ping"],
  description: "Check out my response time.",
  userPermissions: ["Administrator"],
  botPermissions: ["ViewChannel"],
  owner: true,
  run: async (client, message, args) => {
    message.channel.send({
      embeds: [new EmbedBuilder().setTitle(`PING PING PING`).setTimestamp()],
    });
  },
};
