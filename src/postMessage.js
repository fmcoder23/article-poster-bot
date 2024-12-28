const { postToChannel } = require("./bot");
const { getDailyArticles } = require("./scraper");

const postMessage = async () => {

    const article = await getDailyArticles();

    if (article) {
        const message = `<a href="${article.link}">${article.title}</a>\n\n@theconversationcom`;
        await postToChannel(message);
        console.log()
        console.log("Daily article posted successfully.");
    } else {
        console.log("No article found to post.");
    }
}

postMessage();