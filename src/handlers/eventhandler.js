const fs = require("fs");
const colors = require("colors");

module.exports = (client) => {
  console.log("══════════════════════════════════════════".yellow);
  fs.readdirSync("./src/events").forEach((dir) => {
    const commands = fs
      .readdirSync(`./src/events${dir}`)
      .filter((file) => file.endsWith(".js"));
    for (let file of commands) {
      let pull = require(`../events/${dir}/${file}`);
      if (pull.name) {
        client.events.set(pull.name, pull);
        console.log(`[HANDLER - EVENTS] Loaded a file : ${pull.name}`.green);
      } else {
        console.log(
          "\n" +
            "══════════════════════════════════════════════════════".yellow,
        );
        console.log(
          `[HANDLER - EVENTS] Couldn't load the file ${file}, missing name or alises.`
            .red.bold,
        );
        console.log(
          "\n" +
            "══════════════════════════════════════════════════════".yellow,
        );
        continue;
      }
    }
  });
  console.log("══════════════════════════════════════════".yellow);
};
