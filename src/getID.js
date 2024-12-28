const { Bot } = require("grammy");
require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.on("message", (ctx) => {
    console.log("Chat ID:", ctx.chat.id);
});

bot.start();
