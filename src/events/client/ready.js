const client = require('../../../index');
const { ActivityType } = require('discord.js');
const color = require('colors');
const discord = require('discord.js');
const { version, dependencies } = require('../../../package.json');

module.exports = {
  name: "ready",
};

client.on('ready', async () => {
  //Bot Status 
  client.user.setStatus('online')
  client.user.setActivity(`${client.guilds.cache.size} servers & ${client.guilds.cache.reduce((a, b) => a + b?.memberCount, 0)} users`,
    {
      type: ActivityType.Watching
    });

  //Online loggers 
  console.log('══════════════════════════════════════════'.white);
  console.log(`[READY] ${client.user.tag} is Online`.bold);
  console.log('══════════════════════════════════════════'.white);

  //Information loggers 
  console.log('══════════════════════════════════════════'.green);
  console.log(`[INFO] Bot Name: ${client.user.tag}`.brightGreen.bold);
  console.log(`[INFO] Bot Version: ${version}`.brightGreen.bold);
  console.log(`[INFO] Guilds: ${client.guilds.cache.size} servers`.brightGreen.bold);
  console.log(`[INFO] Watching: ${client.guilds.cache.reduce((a, b) => a + b?.memberCount, 0)} members`.brightGreen.bold);
  console.log(`[INFO] Prefix: ${config.global.prefix}`.brightGreen.bold);
  console.log(`[INFO] Commands: ${client.commands.size}`.brightGreen.bold);
  console.log(`[INFO] Slash-Commands: ${client.slashCommands.size}`.brightGreen.bold);
  console.log(`[INFO] Discord.js: v ${discord.version}`.brightGreen.bold);
  console.log(`[INFO] Node.js: ${process.version}`.brightGreen.bold);
  console.log(`[INFO] Platform: ${process.platform} ${process.arch}`.brightGreen.bold);
  console.log(`[INFO] Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`.brightGreen.bold);
  console.log('══════════════════════════════════════════'.green);
})
