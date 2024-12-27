const { Bot } = require("grammy");
require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

// Function to send messages to the channel
async function postToChannel(message) {
    try {
        await bot.api.sendMessage(process.env.CHANNEL_ID, message, {
            parse_mode: "HTML",
        });
    } catch (error) {
        console.error("Failed to post to the channel:", error);
    }
}

module.exports = { bot, postToChannel };
