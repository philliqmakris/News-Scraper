var scraper = function(url){
    let myCheerio = null;

    axios.get(url).then(response => {
        myCheerio = cheerio.load(response.data);
    });

    return myCheerio;
}

module.exports = scraper;