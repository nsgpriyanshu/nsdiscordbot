const { PermissionsBitField, EmbedBuilder } = require("discord.js");
const client = require("../../../index.js");
const config = require("../../configs/bot.json");

module.exports = {
  name: "messagecreate",
};

client.on("messageCreate", async (message) => {
  let prefix = config.global.prefix;
  if (message.channel.type !== 0) return;
  if (message.author.bot) return;
  if (message.mentions.has(client.user.id)) {
    message.channel.send({ content: `Hey, how can I help you?` });
  }
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) {
    //When User don't have required permission!
    if (command.userPermissions) {
      const UserPermEmbed = new EmbedBuilder()
        .setTitle(`You cannot use this command!`)
        .setDescription(`You dont have required permission`)
        .setTimestamp();

      if (
        !message.member.permissions.has(
          PermissionsBitField.resolve(command.userPermissions || []),
        )
      )
        return message.reply({
          embeds: [UserPermEmbed],
        });
    }

    //When Bots don't have required permission!
    if (command.botPermissions) {
      const BotPermEmbed = new EmbedBuilder()
        .setTitle(`I cannot use this command!`)
        .setDescription(`I dont have required permission`)
        .setTimestamp();

      if (
        !message.guild.members.cache
          .get(client.user.id)
          .permissions.has(
            PermissionsBitField.resolve(command.botPermissions || []),
          )
      )
        return message.reply({
          embeds: [BotPermEmbed],
        });
    }

    //Commands only for Devlopers!
    if ((command.owner, command.owner == true)) {
      if (!config.devlopers.owner) return;
      const allowedUsers = [];

      config.devlopers.owner.forEach((user) => {
        const fetchOwner = message.guild.members.cache.get(user);
        if (!fetchOwner) return allowedUsers.push(``);
        allowedUsers.push(`${fetchOwner.user.username}`);
      });

      const DevErrEmbed = new EmbedBuilder()
        .setTitle(`You cannot use this command!`)
        .setDescription(`Only for developers`)
        .setTimestamp();

      if (!config.devlopers.owner.some((ID) => message.member.id.includes(ID)))
        return message.reply({
          embeds: [DevErrEmbed],
        });
    }

    try {
      command.run(client, message, args);
    } catch (err) {
      console.log(err);
    }
  }
});
