const axios = require("axios");
const cheerio = require("cheerio");

async function getDailyArticles() {
    try {
        const response = await axios.get("https://theconversation.com/global");
        const $ = cheerio.load(response.data);

        const articles = [];
        $("div[data-testid='ImmutableGridSlot']").each((i, element) => {
            const anchorTag = $(element).find("a");
            const title = anchorTag.find("h3").text().trim(); // Extracts the article title
            const link = anchorTag.attr("href"); // Extracts the link
            const fullLink = link.startsWith("http") ? link : `https://theconversation.com${link}`; // Ensures full link

            if (title && link) {
                articles.push({ title, link: fullLink });
            }
        });

        // Return the first article of the day
        return articles.length > 0 ? articles[0] : null;
    } catch (error) {
        console.error("Error scraping articles:", error);
        return null;
    }
}

getDailyArticles().then((article) => console.log(article));
