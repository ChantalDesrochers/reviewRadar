var request = require("request");
let reviewsCount = 0;

let reviews = []

// takes in an argument and checks it for a match against an element of the array
// element.content is formatted to be used twice, rename with caution

summaryMC = (reviewslength, sendstuffcb) => review => (error, response, body) => {
  console.log;
  // reviews[review.id].concepts = [];
  reviews[review.id].summary = ''
  let results = JSON.parse(body);
  if (results.status.msg === "OK") {
    reviews[review.id].summary = results.summary
  } else {
    console.log("error occured", results.status);
    reviewslength -= 1
  }
  reviewsCount++;
  console.log('MeaningCloud Summary parsing:', reviewslength - reviewsCount + '/' + reviewslength, 'reviews remaining ')

  // if (reviewsCount === 5) {
  if (reviewsCount === reviewslength) {
    console.log("MeaningCloud Summary parsing complete");
    // console.log(reviews);
    // returnReviews(reviews); // this is where it should go to watson
    reviewsCount = 0; // resetting state before next time it's run
    sentReviews = reviews
    reviews = []
    return sendstuffcb(sentReviews)

    // console.log(sortResults(reviews))
    // DONE!
  }
};

const srequester = (review, cb) => {
  const api_key = "a9a53121a79b11f19ef86092cf29a2a5";
  var options = {
    url: `http://api.meaningcloud.com/summarization-1.0?key=${api_key}&txt=${encodeURI(
      review.description
    )}&sentences=1`,
    method: "POST"
  };
  request(options, cb(review));
  // console.log(options.url)
};

// function iterateWithDelay(array) {
  // called function, receiving reviews array from scraper
summaryWithDelay = sendstuffcb => array => {
  console.log('Beginning MeaningCloud Summary parsing')
  reviews = array
  for (let i = 0; i < reviews.length; i++) {
    (function (i) {
      setTimeout(function () {
        srequester(reviews[i], summaryMC(reviews.length, sendstuffcb));
      }, 1750 * i);
    })(i);
  }
};

module.exports = {
  summaryWithDelay: summaryWithDelay,
};
