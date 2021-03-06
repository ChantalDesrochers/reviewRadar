const scraper = require("./scrape.js");
const watson = require("./sentimentprocessor.js");
// const cloud = require('./integratedmeaningcloud.js')
const summarycloud = require('./summarymeaningcloud.js')
const conceptcloud = require('./conceptsmeaningcloud.js')

const getData = (url, cb) => {
  // console.log("in get data");
  // scraper.yelpRecursion(url, 0, cloud.iterateWithDelay(cb)); // meaningcloud in isolation
  // scraper.yelpRecursion(url, 0, watson.addSentiment(cb)); // watson in isolation
  if (Array.isArray(url)) {
    // console.log('it is an array')s
    // scraper.yelpRecursion(url[0], 0, summarycloud.summaryWithDelay(watson.addSentiment(cb)), url[1]) // summary in isolation
    // scraper.yelpRecursion(url[0], 0, conceptcloud.conceptWithDelay(watson.addSentiment(cb)), url[1]) // concept in isolation
    scraper.yelpRecursion(url[0], 0, summarycloud.summaryWithDelay(conceptcloud.conceptWithDelay(watson.addSentiment(cb))), url[1]) // summary in isolation
  } else { 
  // scraper.yelpRecursion(url, 0, cloud.iterateWithDelay(watson.addSentiment(cb)), null); // yelprecursion, which calls meaningcloud (taking in watson as CB)
  scraper.yelpRecursion(url, 0, summarycloud.summaryWithDelay(conceptcloud.conceptWithDelay(watson.addSentiment(cb))), null) // summary in isolation
  }
  // scraper.tripAdvisorRecursion(url, 0, cloud.iterateWithDelay(watson.addSentiment(cb))); // tripAdvisorRecursion, which calls meaningcloud (taking in watson as CB)
};

module.exports = {
  getData: getData
};
