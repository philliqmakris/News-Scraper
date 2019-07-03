var express = require('express');
var exphbs = require('express-handlebars');
var cheerio = require('cheerio');
var axios = require('axios');
var mongoose = require('mongoose');
var db = require('./models');
// var helper = require('./javascript/helper.js');
var app = express();

app.engine('handlebars', exphbs({ defaultlayout: 'main' }));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port 3000'));

app.get('/', function (req, res) {
    res.render('index');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/News-Scraper", { useNewUrlParser: true });




app.get("/scrape", function (req, res) {
    axios.get("https://www.pbs.org/wgbh/americanexperience/features/worlds-timeline-worlds/").then(response => {
        const $ = cheerio.load(response.data);
        const articles = [];

        $("p").each((i, element) => {
            const article = {};

            let date = element.children.find(child => child.name === 'strong');

            if (date && date.children && date.children[0] && date.children[0].data) {
                date = date.children[0].data;
            } else {
                date = undefined;
            }

            let text = element.children.find(child => child.type === 'text');

            if (text && text.data) {
                text = text.data;
            } else {
                text = undefined;
            }

            if (date && text) {
                article.date = date;
                article.text = text.replace(/\\n/g, '');

                articles.push(article);
            }
        });

        if (articles.length) {
            res.json(articles);
        } else {
            res.send('no articles found');
        }


    });
});

  // this is how you'll save an article:
        // db.Article.create(article)
        //   .then(dbArticle => {
        //     res.send("Added to favorites");
        //   })
        //   .catch(err => console.log(err));





