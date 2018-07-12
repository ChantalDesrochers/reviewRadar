var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  'username': '35dda7ab-cc58-496a-a867-6a10c67bcf0b',
  'password': 'gPMONx18l5FZ',
  // 'version_date': '2017-02-27'
  'version_date': '2018-03-16'
});

const sortResults = results => {
  return results.sort((a, b) => b.score - a.score);
};

const addID = results => {
  results.forEach(function(review, i) {
    review.id = i
  })
  return results
}

const addSentiment = cb => (reviews) => {
  const go = (reviews, cb, newReviews) => {
    if (reviews.length === 0) {
      //  console.log('******DONE*******')
      // console.log('before sorting', newReviews)
      console.log('IBM Watson Sentiment parsing complete')
      console.log('Report is now ready')
      addedIDReviews = addID(sortResults(newReviews))
      return cb(addedIDReviews)
    }
    const head = reviews[0];
    const tail = reviews.slice(1);

    // console.log('head', head)
    console.log('IBM Watson Sentiment parsing:', reviews.length, 'reviews remaining')

    // const contentTarget = head.concepts.map(x => x.content)

    const parameters = {
      'text': head.description,
      'features': {
        'sentiment': {},
        // 'emotion': {
        //   'targets':  head.concepts.map(x => x.content)
        // }
      }
    }

    nlu.analyze(parameters, (err, response) => {
      if (err) return console.log('error:', err);
      if (response.sentiment.document.score > 0.5 ) {
        head.label = 'very positive'
      } else if (response.sentiment.document.score > 0 ) {
        head.label = 'positive'
      } else if (response.sentiment.document.score === 0 ) {
        head.label = 'neutral'
      } else if (response.sentiment.document.score >= -0.5 ) {
        head.label = 'negative'
      } else if (response.sentiment.document.score < -0.5 ) {
        head.label = 'very negative'
      }
      // head.label = response.sentiment.document.label;
      head.score = response.sentiment.document.score;
      // console.log(JSON.stringify(response))
      // console.log(head);
      go(tail, cb, newReviews.concat(head));
    });
  };

  go(reviews, cb, []);
};

module.exports = {
  addSentiment: addSentiment
}
