var request = require("request");
let reviewsCount = 0;

let reviews = []

// takes in an argument and checks it for a match against an element of the array
// element.content is formatted to be used twice, rename with caution
checkForExisting = match => element => {
  return element.content == match;
};



parseMC = (reviewslength, sendstuffcb) => review => (error, response, body) => {
  console.log;
  reviews[review.id].concepts = [];
  let results = JSON.parse(body);
  if (results.status.msg === "OK") {
    results.concept_list.forEach(function (item) {
      if (item.relevance > 40) {
        // threshold of relevance
        existingIndex = review.concepts.findIndex(checkForExisting(item.form));
        if (existingIndex < 0) {
          reviews[review.id].concepts.push({
            content: item.form,
          });
        }
      }
    });
    // console.log(JSON.stringify(inputReviewArray));
  } else {
    console.log("error occured", results.status);
    reviewslength -= 1
  }
  reviewsCount++;
  console.log('MeaningCloud remaining', reviewslength - reviewsCount)

  // if (reviewsCount === 5) {
  if (reviewsCount === reviewslength) {
    console.log("MeaningCloud analysis complete");
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

const requester = (review, cb) => {
  const api_key = "a9a53121a79b11f19ef86092cf29a2a5";
  var options = {
    url: `https://api.meaningcloud.com/topics-2.0?key=${api_key}&lang=en&txt=${encodeURI(
      review.description
    )}&tt=c&uw=y&rt=y`,
    method: "POST"
  };
  request(options, cb(review));
  // console.log(options.url)
};

// function iterateWithDelay(array) {
  // called function, receiving reviews array from scraper
iterateWithDelay = sendstuffcb => array => {
  reviews = array
  for (let i = 0; i < reviews.length; i++) {
    (function (i) {
      setTimeout(function () {
        requester(reviews[i], parseMC(reviews.length, sendstuffcb));
      }, 1750 * i);
    })(i);
  }
};

const conceptAggreator = array => {
  let allConcepts = [];
  array.forEach(function (review) {
    review.concepts.forEach(function (concept) {
      existingIndex = allConcepts.findIndex(checkForExisting(concept.content));
      if (existingIndex < 0) {
        allConcepts.push({
          content: concept.content,
          references: [review.id]
        });
      } else {
        allConcepts[existingIndex].references.push(review.id);
      }
    });
  });
};

module.exports = {
  iterateWithDelay: iterateWithDelay,
  conceptAggreator: conceptAggreator
};
