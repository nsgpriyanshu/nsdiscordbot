const client = require('../../../index');
const { ActivityType } = require('discord.js');

module.exports = {
  name: "ready",
};

client.on("ready", async () => {
  //Bot Status

  client.user.setStatus("online");

  //Online loggers
  console.log("══════════════════════════════════════════".bgGreen);
  console.log(`[READY] ${client.user.tag} is Online`.bold);
  console.log("══════════════════════════════════════════".bgGreen);
});
