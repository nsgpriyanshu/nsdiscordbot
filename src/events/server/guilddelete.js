const { EmbedBuilder } = require("discord.js");
const client = require("../../../index.js");
const config = require("../../configs/bot.json");

module.exports = {
  name: "guilddelete",
};

client.on("guildDelete", async (guild) => {
  const ServerDeleteEmbed = new EmbedBuilder()

    //.setAuthor({ name: client.user.tag, iconURL: client.user.displayAvatarURL()})
    .setTitle(`${guild.name}`)
    .setDescription(`${client.user.username} **Removed from a Server!**`)
    .setThumbnail(guild.iconURL())
    .addFields(
      {
        name: `**Server Name**`,
        value: `${guild.name}`,
      },
      {
        name: `**Server ID**`,
        value: `${guild.id}`,
      },
      {
        name: `**Owner ID**`,
        value: `${guild.ownerId}`,
      },
      {
        name: `**Members**`,
        value: `${guild.memberCount}`,
      },
      {
        name: `**Server Count**`,
        value: `${client.guilds.cache.size}`,
        inline: true,
      },
    )
    .setColor(embed.color.error)
    .setTimestamp()
    .setFooter({ text: `Currently in ${client.guilds.cache.size} Server's!` });

  client.channels.cache
    .get(config.channel.serverLog)
    .send({ embeds: [ServerDeleteEmbed] });
});
