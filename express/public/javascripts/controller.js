const scraper = require("./scrape.js");
const watson = require("./sentimentprocessor.js");
const cloud = require('./integratedmeaningcloud.js')

const sortResults = results => {
  results.sort((a, b) => b.score - a.score);
};

const getData = (url, cb) => {
  // console.log("in get data");
  scraper.yelpRecursion(0, url, cloud.iterateWithDelay(cb)); // 
  // scraper.yelpRecursion(0, url, watson.addSentiment(cb)); // passing in sendstuff from app
};

module.exports = {
  getData: getData
};
