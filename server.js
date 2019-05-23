var express = require('express');
var exphbs = require('express-handlebars');
var cheerio = require('cheerio');
var axios = require('axios');
var mongoose = require('mongoose');
var db = require('./models');
var app = express();

app.engine('handlebars', exphbs({ defaultlayout: 'main' }));
app.set('view engine', 'handlebars');

var port = 3000;
app.listen(port, () => console.log('listening on port 3000'));

app.get('/', function (req, res) {
    res.render('index');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/News-Scraper", { useNewUrlParser: true });


app.get("/scrape", function (req, res) {
    // First, we grab the body of the html with axios
    axios.get("https://news.ycombinator.com/").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every h2 within an article tag, and do the following:
        $(".storylink").each(function (i, element) {
            // Save an empty result object
            var result = {};

            // <a href="https://github.com/SerenityOS/serenity" class="storylink">
            //     SerenityOS – a graphical Unix-like OS for x86, with 90s aesthetics</a>


            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
                .text();
            result.link = $(this)
                .attr("href");

            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
                .then(function (dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    // If an error occurred, log it
                    console.log(err);
                });
        });

        // Send a message to the client
        res.send("Scrape Complete");
    });
});







