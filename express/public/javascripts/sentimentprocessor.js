const scraper = require('./scrape.js')
var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
let reviewsCount = 0;
var { iterateWithDelay } = require('./integratedmeaningcloud.js');
var { conceptAggreator } = require('./integratedmeaningcloud.js');
// var { yelpRecursion } = require('./scrape.js').yelpRecursion


var nlu = new NaturalLanguageUnderstandingV1({
  'username': '35dda7ab-cc58-496a-a867-6a10c67bcf0b',
  'password': 'gPMONx18l5FZ',
  // 'version_date': '2017-02-27'
  'version_date': '2018-03-16'
});


// tim's code need refactoring
const addSentiment = cb => (reviews) => {
  const go = (reviews, cb, newReviews) => {
    if (reviews.length === 0) {
       console.log('******DONE*******')
       console.log(newReviews)
      return cb(newReviews);
    }

    const head = reviews[0];
    const tail = reviews.slice(1);

    // console.log('head', head)
    console.log('remaining length', reviews.length)

    const parameters = {
      'text': head.description,
      'features': {
        'sentiment': {},
      }
    }

    nlu.analyze(parameters, (err, response) => {
      if (err) return console.log('error:', err);
      head.label = response.sentiment.document.label;
      head.score = response.sentiment.document.score;
      // console.log(head);
      go(tail, cb, newReviews.concat(head));
    });
  };

  go(reviews, cb, []);
};

// callback is going to be return reviews

/*
const addSentiment = (reviews) => {
  console.log('hey a callback worked');
  for (var i = 0; i < reviews.length; i++) {
    let review = reviews[i];
    retrieveSentiment(review, reviews);
  }
}

const retrieveSentiment = (review, reviews) => {

  const parameters = {
    'text': review.description,
    'features': {
      'sentiment': {},
    }
  }
  nlu.analyze(parameters, function (err, response) {
    if (err)
      console.log('error:', err);
    else {
      review.label = response.sentiment.document.label;
      review.score = response.sentiment.document.score;
      //console.log(review);
    }
    // console.log(JSON.stringify(response, null, 2));
    reviewsCount++;

    if (reviewsCount === reviews.length) {
      console.log('now we are done');
      //console.log (reviews);
      returnReviews(reviews);

      reviewsCount = 0;
      // console.log(sortResults(reviews))
      // DONE!
      //final function to call when done
    }
  });
}
*/
let returnReviews = (data) => {}


module.exports = {
  addSentiment: addSentiment
}


const sortResults = (results) => {
  results.sort((a, b) => b.score - a.score)
}

const getData = (url, cb) => {
  console.log('in get data')
  // yelpRecursion(0, url, addSentiment);
  scraper.yelpRecursion(0, url, addSentiment);
  // scraper.yelp(0, url, addSentiment);
  returnReviews = cb;
}
