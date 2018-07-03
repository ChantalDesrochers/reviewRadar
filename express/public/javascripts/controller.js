const scraper = require("./scrape.js");
const watson = require("./sentimentprocessor.js");

const sortResults = results => {
  results.sort((a, b) => b.score - a.score);
};

let returnReviews = data => {};

const getData = (url, cb) => {
  console.log("in get data");
  // yelpRecursion(0, url, addSentiment);
  scraper.yelpRecursion(0, url, watson.addSentiment(cb)); // passing in sendstuff from
  // scraper.yelp(0, url, addSentiment);
  // returnReviews = cb;
};

module.exports = {
  getData: getData
};
