const axios = require("axios");
const cheerio = require("cheerio");

async function getDailyArticles() {
    try {
        const response = await axios.get("https://theconversation.com/global");
        const $ = cheerio.load(response.data);

        const articles = [];
        $("div[data-testid='ImmutableGridSlot']").each((i, element) => {
            const anchorTag = $(element).find("a");
            const title = anchorTag.find("h3").text().trim(); 
            const link = anchorTag.attr("href");
            const fullLink = link.startsWith("http") ? link : `https://theconversation.com${link}`;

            if (title && link) {
                articles.push({ title, link: fullLink });
            }
        });
        
        return articles.length > 0 ? articles[articles.length-1] : null;
    } catch (error) {
        console.error("Error scraping articles:", error);
        return null;
    }
}

module.exports = { getDailyArticles };
