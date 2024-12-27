const { getDailyArticles } = require("./scraper");

getDailyArticles().then((article) => {
    console.log(article);
});
