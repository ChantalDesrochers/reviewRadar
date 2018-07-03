var request = require("request");
let reviewsCount = 0;

encodedArray = [];

// takes in an argument and checks it for a match against an element of the array
// element.content is formatted to be used twice, rename with caution
checkForExisting = match => element => {
  return element.content == match;
};

parseMC = reviewslength => review => (error, response, body) => {
  console.log;
  review.concepts = [];
  let results = JSON.parse(body);
  if (results.status.msg === "OK") {
    results.concept_list.forEach(function (item) {
      if (item.relevance > 0) {
        // threshold of relevance
        existingIndex = review.concepts.findIndex(checkForExisting(item.form));
        if (existingIndex < 0) {
          review.concepts.push({
            content: item.form,
            position: review.id
          });
        }
      }
    });
    // console.log(JSON.stringify(inputReviewArray));
  } else {
    console.log("error occured", results.status);
  }
  reviewsCount++;

  if (reviewsCount === reviewslength) {
    console.log("now we are done");
    console.log(reviews);
    returnReviews(reviews);

    reviewsCount = 0;
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
iterateWithDelay = array => {
  for (let i = 0; i < array.length; i++) {
    (function (i) {
      setTimeout(function () {
        requester(array[i], parseMC(array.length));
      }, 1500 * i);
    })(i);
  }
};

const conceptAggreator = array => {
  let allConcepts = [];
  array.forEach(function (review) {
    review.concepts.forEach(function (concept) {
      // console.log(allConcepts.findIndex(checkForExisting(concept.content)));
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

// conceptAggreator(noDupeJSON2);

module.exports = {
  iterateWithDelay: iterateWithDelay,
  conceptAggreator: conceptAggreator
};
