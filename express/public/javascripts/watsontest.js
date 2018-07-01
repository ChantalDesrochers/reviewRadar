var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
let reviewsCount = 0;

var nlu = new NaturalLanguageUnderstandingV1({
    'username': '35dda7ab-cc58-496a-a867-6a10c67bcf0b',
    'password': 'gPMONx18l5FZ',
    'version_date': '2018-03-16'
});

// var parameters = {
//   'text': `Great service, high prices, slightly above average food. I had the steak and eggs, and the steak was a little over cooked for my liking (medium well). The eggs were ok but nothing special; however, the avocado that came with it was really good. The black beans that came with it were cold; clearly by design, but it surprised me and was a put off.\n\nMy wife had the avocado toast, after they told us they had just run out of the protein pancakes. She liked the toast but said it wasn't anything to write home about.\n\nWe also got some bacon to split, which was reasonably priced at $3 for three strips, but the bacon strips were pretty thin. There just wasn't a lot to it. The bone broth was scalding hot, and didn't have a ton of flavor, but it was nice and warming with the near zero degree (Fahrenheit) temperatures outside.\n\nWe grabbed some small desserts that they had; my wife had the collagen chocolate pudding which my wife loved. I had the raw chocolate chip cookie dough; it was very dense but the taste was really good.\n\nStaff was really nice and friendly, and it was great to find some healthy options while traveling. I can't give it the highest marks, but we will probably be back just to keep having healthy options on our trip.`,
//   'features': {
//     'categories': {},
//     'emotion': {
//       'targets': [
//         'eggs',
//         'avocado',
//         'meat'
//       ]
//     },
//     'entities': {
//       'sentiment': true,
//       'limit': 1
//     },
//     'keywords': {
//       'sentiment': true,
//       'emotion': true,
//       'limit': 3
//     }    
//   }
// };



//input
var parameters = {
  'text': `Great service, high prices, slightly above average food. I had the steak and eggs, and the steak was a little over cooked for my liking (medium well). The eggs were ok but nothing special; however, the avocado that came with it was really good. The black beans that came with it were cold; clearly by design, but it surprised me and was a put off.\n\nMy wife had the avocado toast, after they told us they had just run out of the protein pancakes. She liked the toast but said it wasn't anything to write home about.\n\nWe also got some bacon to split, which was reasonably priced at $3 for three strips, but the bacon strips were pretty thin. There just wasn't a lot to it. The bone broth was scalding hot, and didn't have a ton of flavor, but it was nice and warming with the near zero degree (Fahrenheit) temperatures outside.\n\nWe grabbed some small desserts that they had; my wife had the collagen chocolate pudding which my wife loved. I had the raw chocolate chip cookie dough; it was very dense but the taste was really good.\n\nStaff was really nice and friendly, and it was great to find some healthy options while traveling. I can't give it the highest marks, but we will probably be back just to keep having healthy options on our trip.`,
  'features': {
    'emotion': {
      'targets': [
        'eggs',
        'avocado',
        'meat'
      ]
    },
    'keywords': {
      'sentiment': true,
      'emotion': true,
      'limit': 3
    }    
  },
  'return_analyzed_text': true,
};

nlu.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});


//output
// {
  //   "usage": {
    //     "text_units": 1,
    //     "text_characters": 1241,
    //     "features": 4
    //   },
    //   "language": "en",
    //   "keywords": [  // analyzes keywords within a document, does not take parameters
    //     {
      //       "text": "collagen chocolate pudding",
      //       "sentiment": {
        //         "score": 0.537467,
//         "label": "positive"
//       },
//       "relevance": 0.98194,
//       "emotion": {
//         "sadness": 0.049596,
//         "joy": 0.804854,
//         "fear": 0.019714,
//         "disgust": 0.046325,
//         "anger": 0.038966
//       }
//     },
//     {
//       "text": "chocolate chip cookie",
//       "sentiment": {
//         "score": -0.393852,
//         "label": "negative"
//       },
//       "relevance": 0.927978,
//       "emotion": {
//         "sadness": 0.115541,
//         "joy": 0.338109,
//         "fear": 0.052589,
//         "disgust": 0.358902,
//         "anger": 0.058309
//       }
//     },
//     {
//       "text": "healthy options",
//       "sentiment": {
//         "score": 0.69108,
//         "label": "positive"
//       },
//       "relevance": 0.900738,
//       "emotion": {
//         "sadness": 0.012216,
//         "joy": 0.91909,
//         "fear": 0.045041,
//         "disgust": 0.001164,
//         "anger": 0.005321
//       }
//     }
//   ],
//   "entities": [ // identifies entities in the sent text
//     {
//       "type": "Quantity",
//       "text": "zero degree",
//       "sentiment": {
//         "score": 0,
//         "label": "neutral"
//       },
//       "relevance": 0.01,
//       "count": 1
//     }
//   ],
//   "emotion": { // useful for examining targets, looks for specific text
//     "targets": [
//       {
//         "text": "eggs",
//         "emotion": {
//           "sadness": 0.04901,
//           "joy": 0.636556,
//           "fear": 0.064423,
//           "disgust": 0.15552,
//           "anger": 0.156479
//         }
//       },
//       {
//         "text": "avocado",
//         "emotion": {
//           "sadness": 0.053695,
//           "joy": 0.771131,
//           "fear": 0.061095,
//           "disgust": 0.03942,
//           "anger": 0.079509
//         }
//       }
//     ],
//     "document": { // entire text
//       "emotion": {
//         "sadness": 0.100771,
//         "joy": 0.692535,
//         "fear": 0.091412,
//         "disgust": 0.533693,
//         "anger": 0.089178
//       }
//     }
//   },
//   "categories": [ // not useful, categorizes the document
//     {
//       "score": 0.470235,
//       "label": "/food and drink/food/breakfast foods"
//     },
//     {
//       "score": 0.452685,
//       "label": "/food and drink/desserts and baking"
//     },
//     {
//       "score": 0.427952,
//       "label": "/food and drink"
//     }
//   ]
// }

const watsonoutput = {
  "usage": {
    "text_units": 1,
    "text_characters": 1241,
    "features": 2
  },
  "language": "en",
  "keywords": [ // not as useful
    {
      "text": "collagen chocolate pudding",
      "sentiment": {
        "score": 0.537467,
        "label": "positive"
      },
      "relevance": 0.98194,
      "emotion": {
        "sadness": 0.049596,
        "joy": 0.804854,
        "fear": 0.019714,
        "disgust": 0.046325,
        "anger": 0.038966
      }
    },
    {
      "text": "chocolate chip cookie",
      "sentiment": {
        "score": -0.393852,
        "label": "negative"
      },
      "relevance": 0.927978,
      "emotion": {
        "sadness": 0.115541,
        "joy": 0.338109,
        "fear": 0.052589,
        "disgust": 0.358902,
        "anger": 0.058309
      }
    },
    {
      "text": "healthy options",
      "sentiment": {
        "score": 0.69108,
        "label": "positive"
      },
      "relevance": 0.900738,
      "emotion": {
        "sadness": 0.012216,
        "joy": 0.91909,
        "fear": 0.045041,
        "disgust": 0.001164,
        "anger": 0.005321
      }
    }
  ],
  "emotion": {
    "targets": [
      {
        "text": "eggs",
        "emotion": {
          "sadness": 0.04901,
          "joy": 0.636556,
          "fear": 0.064423,
          "disgust": 0.15552,
          "anger": 0.156479
        }
      },
      {
        "text": "avocado",
        "emotion": {
          "sadness": 0.053695,
          "joy": 0.771131,
          "fear": 0.061095,
          "disgust": 0.03942,
          "anger": 0.079509
        }
      }
    ],
    "document": {
      "emotion": {
        "sadness": 0.100771,
        "joy": 0.692535,
        "fear": 0.091412,
        "disgust": 0.533693,
        "anger": 0.089178
      }
    }
  },
  "analyzed_text": "Great service, high prices, slightly above average food. I had the steak and eggs, and the steak was a little over cooked for my liking (medium well). The eggs were ok but nothing special; however, the avocado that came with it was really good. The black beans that came with it were cold; clearly by design, but it surprised me and was a put off.\n\nMy wife had the avocado toast, after they told us they had just run out of the protein pancakes. She liked the toast but said it wasn't anything to write home about.\n\nWe also got some bacon to split, which was reasonably priced at $3 for three strips, but the bacon strips were pretty thin. There just wasn't a lot to it. The bone broth was scalding hot, and didn't have a ton of flavor, but it was nice and warming with the near zero degree (Fahrenheit) temperatures outside.\n\nWe grabbed some small desserts that they had; my wife had the collagen chocolate pudding which my wife loved. I had the raw chocolate chip cookie dough; it was very dense but the taste was really good.\n\nStaff was really nice and friendly, and it was great to find some healthy options while traveling. I can't give it the highest marks, but we will probably be back just to keep having healthy options on our trip."
}
