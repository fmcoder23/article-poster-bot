const { postToChannel } = require("./bot");
const { getDailyArticles } = require("./scraper");

const postArticle = async() => {
    cron.schedule("0 9 * * *", async () => {
        console.log("Fetching and posting daily article...");
        const article = await getDailyArticles();
    
        if (article) {
            const message = `<a href="${article.link}">${article.title}</a>\n\n@theconversationcom`;
            await postToChannel(message);
            console.log("Daily article posted successfully.");
        } else {
            console.log("No article found to post.");
        }
    });
}

module.exports = postArticle;
