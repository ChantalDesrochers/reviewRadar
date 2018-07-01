var request = require('request');

const api_key = 'a9a53121a79b11f19ef86092cf29a2a5'

var options = {
    url: `https://api.meaningcloud.com/topics-2.0?key=${api_key}&lang=en&txt=${urlencodedtext}&tt=c&uw=y&rt=y`,
    method: 'POST'
};

function callback(error, response, body) {
  let concepts = []
  let results = JSON.parse(body)
  if (results.status.msg === 'OK') {
    results.concept_list.forEach(function(item) {
      if (item.relevance > 40) {
        // threshold of relevance
        concepts.push(item.form);
      }
    })
    console.log(concepts)
    } else {
      console.log('error occured');
    }
    // console.log('body', body);s
}

// request(options, callback, api_key, urlencodedtext);

inputReviewArray = [
  {
  "rating": "4.0",
  "author": "Ksenja T.",
  "description":
    "I tried Impact Kitchen when it first opened via Uber eats. They were still working out a few kinks, especially with regard to portion size, which I found to be too small.\n\nThey have since improved a lot, adding a lot of different menu items and to-go options. Angela runs a tight ship and this is now one of my go-to spots. The only downside is that it is fairly expensive.\n\nMy favorite items on the menu are the winter citrus salad with falafel add-on; chicken bone broth, thai butternut squash soup (delicious!) and the halo power bowl.\n\nThe collagen chocolate pudding is an amazing dessert for when those cravings kick in.",
  "datePublished": "2017-04-12",
  "label": "positive",
  "score": 0.0647312
},
{
  "rating": "5.0",
  "author": "Jacquie O.",
  "description":
    "This place tastes \"healthy\" in the way that means \"fresh\" and not as a euphemism for \"bland\". Ordered a workplace dinner from here on hungrhub. Food arrived on time, of good quality, flavourful and pretty. Prices very reasonable and falafel is even moist!\n\nYum",
  "datePublished": "2017-11-29",
  "label": "positive",
  "score": 0.749361
},
{
  "rating": "3.0",
  "author": "Ana C.",
  "description":
    "Annoyed at the very slow slow service. \nFor the price and location I expect at least a bag and some cutlery.\nI had to ask for a bag, and they didn't bother putting in napkins and cutlery.\n\nI waiting 10 min for an iced americano when there was no one ahead of me. \n\nFor an experience that is set up to be streamline,\nthey need to stop hiring kids and speed things up asap.",
  "datePublished": "2017-10-06",
  "label": "negative",
  "score": -0.38222
},
{
  "rating": "5.0",
  "author": "Matt B.",
  "description":
    "Excellent taco stand with great food to go along with good prices and service.  I found about this place from an article on Blog.To.   I had the Baja fish haddock tacos and they were among the best tacos I had anywhere, and that includes those made in Texas or California.    \n\nThere is very limited seating and it is cash only.    But I am not going to let that cost them a five-star review by making Seven Lives out to be something that it is not.    I would strongly suggest this establishment if you are craving for tacos, enough said.",
  "datePublished": "2018-06-22",
  "label": "positive",
  "score": 0.165046
},
{
  "rating": "5.0",
  "author": "Aastha S.",
  "description":
    "Went here during my first trip to Kensington, and found their tacos to be just pure deliciousness! I tried their daily special - blackened cod with mango/pineapple salsa, and for $7, it was the right proportion and flavours! The only down side is there is always a line-up and barely any space to eat indoors, so we ended up eating on the street. \n\nThe place offers a variety of vegetarian and meat options, and has their own take on the authentic Mexican tacos. Best to park nearby and walk here as part of your Kensington market loop. Also remember to bring cash and they don't accept credit cards! \n\nDefinitely coming back for some more another day!",
  "datePublished": "2018-06-10",
  "label": "positive",
  "score": 0.336056}
]
encodedArray = []

inputReviewArray.forEach(function(review)  {
  encodedArray.push(encodeURI(review.description))
})

console.log(encodedArray)
