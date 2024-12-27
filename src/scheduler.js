const { postToChannel } = require("./bot");
const { getDailyArticles } = require("./scraper");

cron.schedule("0 9 * * *", async () => {
    console.log("Fetching and posting daily article...");
    const article = await getDailyArticles();

    if (article) {
        const message = `[${article.title}](${article.link})\n\n@theconversationcom`;
        await postToChannel(message);
        console.log("Daily article posted successfully.");
    } else {
        console.log("No article found to post.");
    }
});
