const scraper = require('./scrape.js')
var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
let reviewsCount = 0;

var nlu = new NaturalLanguageUnderstandingV1({
    'username': '35dda7ab-cc58-496a-a867-6a10c67bcf0b',
    'password': 'gPMONx18l5FZ',
    'version_date': '2017-02-27'
});

const addSentiment = (reviews) => {

    console.log('hey a callback worked');
    for (var i = 0; i < reviews.length; i++) {
        let review = reviews[i];
        retrieveSentiment(review, reviews);  
    }  
}

const retrieveSentiment = (review, reviews) =>{

    const parameters = {
      'text': review.description,
      'features': {
        'sentiment': {
        },
      }
    }
    nlu.analyze(parameters, function (err, response) {
      if (err)
        console.log('error:', err);
      else
      {
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
const sortResults = (results) => {
  results.sort((a,b) => b.score - a.score)
}

// const getData = () => {

//     scraper.yelp(addSentiment);
// }

// getData()

exports.getData = (cb) => {
console.log('in get data')
  scraper.yelp(addSentiment);
  returnReviews = cb;
}
let returnReviews = (data) => {

}
