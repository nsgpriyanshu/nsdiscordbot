const { EmbedBuilder } = require("discord.js");
const config = require("../configs/bot.json");

module.exports = (client) => {
  //First Type Of Error

  process.on("unhandledRejection", (reason, p) => {
    console.log("[ERROR-HANDLING] :: Unhamdled Rejection/Catch");
    console.log(reason, p);

    const ErrEmbedType1 = new EmbedBuilder()

      .setTitle(`⚠️ New Error (Error type 1)`)
      .setDescription(
        "An error just occurred in the bot console! **\n\nERROR:\n\n** ```" +
          reason +
          "\n\n" +
          p +
          "```",
      )
      .setColor(`#ff0000`)
      .setTimestamp();

    client.channels.cache
      .get(config.channel.error)
      .send({ embeds: [ErrEmbedType1] });
  });

  //Second Type Of Error

  process.on("unhandledException", (err, origin) => {
    console.log("[ERROR-HANDLING] :: Unhamdled Exception/Catch");
    console.log(err, origin);

    const ErrEmbedType2 = new EmbedBuilder()

      .setTitle(`⚠️ New Error (Error type 2)`)
      .setDescription(
        "An error just occurred in the bot console! **\n\nERROR:\n\n** ```" +
          err +
          "\n\n" +
          origin +
          "```",
      )
      .setColor(`#ff0000`)
      .setTimestamp();

    client.channels.cache
      .get(config.channel.error)
      .send({ embeds: [ErrEmbedType2] });
  });

  //Third Type Of Error

  process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log("[ERROR-HANDLING] :: Unhamdled Exception/Catch (MONITOR)");
    console.log(err, origin);

    const ErrEmbedType3 = new EmbedBuilder()

      .setTitle(`⚠️ New Error (Error type 3)`)
      .setDescription(
        "An error just occurred in the bot console! **\n\nERROR:\n\n** ```" +
          err +
          "\n\n" +
          origin +
          "```",
      )
      .setColor(`#ffff00`)
      .setTimestamp();

    client.channels.cache
      .get(config.channel.error)
      .send({ embeds: [ErrEmbedType3] });
  });

  //END HERE
};
