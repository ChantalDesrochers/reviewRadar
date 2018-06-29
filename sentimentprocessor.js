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
          console.log('now we are done', reviews.sort((a,b) => b.score - a.score));
          // console.log('now we are done', reviews);
          reviewsCount = 0;
        // DONE!
        //final function to call when done
      }
    });
}


const getData = () => {

    scraper.yelp(addSentiment);
}

getData()
