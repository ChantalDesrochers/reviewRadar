const scraper = require("./scrape.js");
const watson = require("./sentimentprocessor.js");
const cloud = require('./integratedmeaningcloud.js')

const sortResults = results => {
  results.sort((a, b) => b.score - a.score);
};

const getData = (url, cb) => {
  // console.log("in get data");
  // scraper.yelpRecursion(0, url, cloud.iterateWithDelay(cb)); // meaningcloud in isolation
  // scraper.yelpRecursion(0, url, watson.addSentiment(cb)); // watson in isolation
  scraper.yelpRecursion(0, url, cloud.iterateWithDelay(watson.addSentiment(cb))); // meaningcloud in isolation
};

module.exports = {
  getData: getData
};
