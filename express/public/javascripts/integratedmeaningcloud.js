var request = require("request");
let reviewsCount = 0;

let reviews = []

// takes in an argument and checks it for a match against an element of the array
// element.content is formatted to be used twice, rename with caution
checkForExisting = match => element => {
  return element.content == match;
};

conceptsMC = (reviewslength, watsoncb) => review => (error, response, body) => {
  console.log('reviews length received by conceptsMC', reviewslength)
  console.log('reviews received by conceptsMC', review)
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
    // // console.log(JSON.stringify(inputReviewArray));
  } else {
    console.log("error occured", results.status);
    reviewslength -= 1
  }
  reviewsCount++;
  console.log('MeaningCloud Concept analysis remaining', reviewslength - reviewsCount)

  // if (reviewsCount === 5) {
  if (reviewsCount === reviewslength) {
    console.log("MeaningCloud Concept analysis complete");
    // console.log(reviews);
    // returnReviews(reviews); // this is where it should go to watson
    reviewsCount = 0; // resetting state before next time it's run
    sentReviews = reviews
    reviews = []
    return watsoncb(sentReviews)

    // console.log(sortResults(reviews))
    // DONE!
  }
};



summaryMC = (reviewslength, watsoncb) => review => (error, response, body) => {
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
  console.log('MeaningCloud Summary analysis remaining', reviewslength - reviewsCount)

  // if (reviewsCount === 5) {
  if (reviewsCount === reviewslength) {
    console.log("MeaningCloud Summary analysis complete");
    // console.log(reviews);
    // returnReviews(reviews); // this is where it should go to watson
    reviewsCount = 0; // resetting state before next time it's run
    sentReviews = reviews
    // reviews = []
    console.log('finished summary set', sentReviews)
    iterateWithDelay(watsoncb, conceptsMC)(sentReviews)
    // return
    // console.log(sortResults(reviews))
    // DONE!
  }
};

const requester = (review, cb) => {
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
iterateWithDelay = (watsoncb, parsingfunction) => array => {
  console.log('array received', array.length, array[0])
  reviews = array
  console.log('reviews to be parsed', reviews.length, reviews[0])
  for (let i = 0; i < reviews.length; i++) {
    (function (i) {
      setTimeout(function () {
        requester(reviews[i], parsingfunction(reviews.length, watsoncb));
      }, 1750 * i);
    })(i);
  }
};


module.exports = {
  iterateWithDelay: iterateWithDelay,
  summaryMC: summaryMC,
};
