//Server Area
const express = require("express");
const colors = require("colors");
const app = express();

app.listen(3000, () => {
  console.log("══════════════════════════════════════════".yellow);
  console.log("            [SERVER IS RUNNING]".yellow.bold);
  console.log("══════════════════════════════════════════".yellow);
  console.log("[SUCCESS] Project is running :D".yellow.bold);
  console.log("[RUNNING] Bot Name : Your-bot-name".yellow.bold);
  console.log("[RUNNING] Bot ID : 00000000000000000000".yellow.bold);
  console.log("[RUNNING] Home Server Name : Unknown".yellow.bold);
  console.log("[RUNNING] Server ID : 00000000000000000000".yellow.bold);
  console.log("══════════════════════════════════════════".yellow);
});

app.get("/", (req, res) => {
  res.send("Hello World , I am Power Op bot");
});

const dotenv = require("dotenv");
dotenv.config();
const { Client, Partials, Collection } = require("discord.js");

const client = new Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "GuildPresences",
    "DirectMessages",
    "MessageContent",
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
  ],
});

client.commands = new Collection();
client.events = new Collection();
client.aliases = new Collection();

module.exports = client;

["commandhandler", "eventhandler", "errorhandler"].forEach((file) => {
  require(`./handlers/${file}`);
});

client.login(process.env.TOKEN).catch((err) => {
  console.log(
    "[CRASH] Something went wrong while connecting to Bot".red + "\n",
  );
  console.log("[CRUSH] Error from Discord API :".red + err);
  process.exit();
});
