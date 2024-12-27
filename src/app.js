const express = require("express");
const { bot } = require("./bot");
const app = express();

// Initialize bot
bot.start();

// Health check endpoint
app.get("/", (req, res) => {
    res.send("Daily Article Bot is running!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
