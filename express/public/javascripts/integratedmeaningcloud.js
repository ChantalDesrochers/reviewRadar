var request = require("request");

// inputReviewArray = [
//   {
//     id: 0,
//     rating: "4.0",
//     author: "Ksenja T.",
//     description:
//       "I tried Impact Kitchen when it first opened via Uber eats. They were still working out a few kinks, especially with regard to portion size, which I found to be too small.\n\nThey have since improved a lot, adding a lot of different menu items and to-go options. Angela runs a tight ship and this is now one of my go-to spots. The only downside is that it is fairly expensive.\n\nMy favorite items on the menu are the winter citrus salad with falafel add-on; chicken bone broth, thai butternut squash soup (delicious!) and the halo power bowl.\n\nThe collagen chocolate pudding is an amazing dessert for when those cravings kick in.",
//     datePublished: "2017-04-12",
//     label: "positive",
//     score: 0.0647312
//   },
//   {
//     id: 1,
//     rating: "5.0",
//     author: "Jacquie O.",
//     description:
//       'This place tastes "healthy" in the way that means "fresh" and not as a euphemism for "bland". Ordered a workplace dinner from here on hungrhub. Food arrived on time, of good quality, flavourful and pretty. Prices very reasonable and falafel is even moist!\n\nYum',
//     datePublished: "2017-11-29",
//     label: "positive",
//     score: 0.749361
//   },
//   {
//     id: 2,
//     rating: "3.0",
//     author: "Ana C.",
//     description:
//       "Annoyed at the very slow slow service. \nFor the price and location I expect at least a bag and some cutlery.\nI had to ask for a bag, and they didn't bother putting in napkins and cutlery.\n\nI waiting 10 min for an iced americano when there was no one ahead of me. \n\nFor an experience that is set up to be streamline,\nthey need to stop hiring kids and speed things up asap.",
//     datePublished: "2017-10-06",
//     label: "negative",
//     score: -0.38222
//   },
//   {
//     id: 3,
//     rating: "5.0",
//     author: "Matt B.",
//     description:
//       "Excellent taco stand with great food to go along with good prices and service.  I found about this place from an article on Blog.To.   I had the Baja fish haddock tacos and they were among the best tacos I had anywhere, and that includes those made in Texas or California.    \n\nThere is very limited seating and it is cash only.    But I am not going to let that cost them a five-star review by making Seven Lives out to be something that it is not.    I would strongly suggest this establishment if you are craving for tacos, enough said.",
//     datePublished: "2018-06-22",
//     label: "positive",
//     score: 0.165046
//   },
//   {
//     id: 4,
//     rating: "5.0",
//     author: "Aastha S.",
//     description:
//       "Went here during my first trip to Kensington, and found their tacos to be just pure deliciousness! I tried their daily special - blackened cod with mango/pineapple salsa, and for $7, it was the right proportion and flavours! The only down side is there is always a line-up and barely any space to eat indoors, so we ended up eating on the street. \n\nThe place offers a variety of vegetarian and meat options, and has their own take on the authentic Mexican tacos. Best to park nearby and walk here as part of your Kensington market loop. Also remember to bring cash and they don't accept credit cards! \n\nDefinitely coming back for some more another day!",
//     datePublished: "2018-06-10",
//     label: "positive",
//     score: 0.336056
//   }
// ];

encodedArray = [];

// inputReviewArray.forEach(function(review) {
//   encodedArray.push(encodeURI(review.description));
// });

// console.log(encodedArray);

const requester = (review, cbMC) => {
  const api_key = "a9a53121a79b11f19ef86092cf29a2a5";
  var options = {
    url: `https://api.meaningcloud.com/topics-2.0?key=${api_key}&lang=en&txt=${encodeURI(
      review.description
    )}&tt=c&uw=y&rt=y`,
    method: "POST"
  };
  request(options, cbMC(review));
  // console.log(options.url)
};

// function iterateWithDelay(array) {
iterateWithDelay = array => {
  for (let i = 0; i < array.length; i++) {
    (function(i) {
      setTimeout(function() {
        requester(array[i], parseMC);
      }, 1500 * i);
    })(i);
  }
};

// takes in an argument and checks it for a match against an element of the array
// element.content is formatted to be used twice, rename with caution
checkForExisting = match => element => {
  return element.content == match;
};

parseMC = review => (error, response, body) => {
  console.log;
  review.concepts = [];
  let results = JSON.parse(body);
  if (results.status.msg === "OK") {
    results.concept_list.forEach(function(item) {
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
    console.log("finalOutput***", JSON.stringify(inputReviewArray));
  } else {
    console.log("error occured", results.status);
  }
};

// iterateWithDelay(inputReviewArray);

// let noDupeJSON = [
//   {
//     id: 0,
//     rating: "4.0",
//     author: "Ksenja T.",
//     description:
//       "I tried Impact Kitchen when it first opened via Uber eats. They were still working out a few kinks, especially with regard to portion size, which I found to be too small.\n\nThey have since improved a lot, adding a lot of different menu items and to-go options. Angela runs a tight ship and this is now one of my go-to spots. The only downside is that it is fairly expensive.\n\nMy favorite items on the menu are the winter citrus salad with falafel add-on; chicken bone broth, thai butternut squash soup (delicious!) and the halo power bowl.\n\nThe collagen chocolate pudding is an amazing dessert for when those cravings kick in.",
//     datePublished: "2017-04-12",
//     label: "positive",
//     score: 0.0647312,
//     concepts: [
//       { content: "soup", position: 0 },
//       { content: "boat", position: 0 },
//       { content: "advertisement", position: 0 },
//       { content: "spot", position: 0 },
//       { content: "favorite", position: 0 },
//       { content: "winter", position: 0 },
//       { content: "citrus", position: 0 },
//       { content: "salad", position: 0 },
//       { content: "attention deficit disorder", position: 0 },
//       { content: "chicken", position: 0 },
//       { content: "bone", position: 0 },
//       { content: "Thai", position: 0 },
//       { content: "chocolate", position: 0 },
//       { content: "pudding", position: 0 },
//       { content: "dessert", position: 0 }
//     ]
//   },
//   {
//     id: 1,
//     rating: "5.0",
//     author: "Jacquie O.",
//     description:
//       'This place tastes "healthy" in the way that means "fresh" and not as a euphemism for "bland". Ordered a workplace dinner from here on hungrhub. Food arrived on time, of good quality, flavourful and pretty. Prices very reasonable and falafel is even moist!\n\nYum',
//     datePublished: "2017-11-29",
//     label: "positive",
//     score: 0.749361,
//     concepts: [
//       { content: "dinner", position: 1 },
//       { content: "food", position: 1 }
//     ]
//   },
//   {
//     id: 2,
//     rating: "3.0",
//     author: "Ana C.",
//     description:
//       "Annoyed at the very slow slow service. \nFor the price and location I expect at least a bag and some cutlery.\nI had to ask for a bag, and they didn't bother putting in napkins and cutlery.\n\nI waiting 10 min for an iced americano when there was no one ahead of me. \n\nFor an experience that is set up to be streamline,\nthey need to stop hiring kids and speed things up asap.",
//     datePublished: "2017-10-06",
//     label: "negative",
//     score: -0.38222,
//     concepts: [
//       { content: "bag", position: 2 },
//       { content: "cutlery", position: 2 },
//       { content: "service", position: 2 },
//       { content: "location", position: 2 },
//       { content: "kid", position: 2 },
//       { content: "speed", position: 2 }
//     ]
//   },
//   {
//     id: 3,
//     rating: "5.0",
//     author: "Matt B.",
//     description:
//       "Excellent taco stand with great food to go along with good prices and service.  I found about this place from an article on Blog.To.   I had the Baja fish haddock tacos and they were among the best tacos I had anywhere, and that includes those made in Texas or California.    \n\nThere is very limited seating and it is cash only.    But I am not going to let that cost them a five-star review by making Seven Lives out to be something that it is not.    I would strongly suggest this establishment if you are craving for tacos, enough said.",
//     datePublished: "2018-06-22",
//     label: "positive",
//     score: 0.165046,
//     concepts: [
//       { content: "taco", position: 3 },
//       { content: "food", position: 3 },
//       { content: "service", position: 3 },
//       { content: "place", position: 3 },
//       { content: "article", position: 3 },
//       { content: "fish", position: 3 },
//       { content: "establishment", position: 3 }
//     ]
//   },
//   {
//     id: 4,
//     rating: "5.0",
//     author: "Aastha S.",
//     description:
//       "Went here during my first trip to Kensington, and found their tacos to be just pure deliciousness! I tried their daily special - blackened cod with mango/pineapple salsa, and for $7, it was the right proportion and flavours! The only down side is there is always a line-up and barely any space to eat indoors, so we ended up eating on the street. \n\nThe place offers a variety of vegetarian and meat options, and has their own take on the authentic Mexican tacos. Best to park nearby and walk here as part of your Kensington market loop. Also remember to bring cash and they don't accept credit cards! \n\nDefinitely coming back for some more another day!",
//     datePublished: "2018-06-10",
//     label: "positive",
//     score: 0.336056,
//     concepts: [
//       { content: "taco", position: 4 },
//       { content: "credit card", position: 4 },
//       { content: "special", position: 4 },
//       { content: "cod", position: 4 },
//       { content: "mango", position: 4 },
//       { content: "$", position: 4 },
//       { content: "side", position: 4 },
//       { content: "team", position: 4 },
//       { content: "space", position: 4 },
//       { content: "street", position: 4 },
//       { content: "place", position: 4 },
//       { content: "meat", position: 4 },
//       { content: "Mexican", position: 4 },
//       { content: "market", position: 4 },
//       { content: "trip", position: 4 }
//     ]
//   }
// ];


const conceptAggreator = array => {
  let allConcepts = [];
  array.forEach(function(review) {
    review.concepts.forEach(function(concept) {
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

conceptAggreator(noDupeJSON2);
console.log(JSON.stringify(allConcepts));

// allConceptResults = [ { content: 'soup', references: [ 0 ] },
// { content: 'boat', references: [ 0 ] },
// { content: 'advertisement', references: [ 0 ] },
// { content: 'spot', references: [ 0 ] },
// { content: 'favorite', references: [ 0 ] },
// { content: 'winter', references: [ 0 ] },
// { content: 'citrus', references: [ 0 ] },
// { content: 'salad', references: [ 0 ] },
// { content: 'attention deficit disorder', references: [ 0 ] },
// { content: 'chicken', references: [ 0 ] },
// { content: 'bone', references: [ 0 ] },
// { content: 'Thai', references: [ 0 ] },
// { content: 'chocolate', references: [ 0 ] },
// { content: 'pudding', references: [ 0 ] },
// { content: 'dessert', references: [ 0 ] },
// { content: 'dinner', references: [ 1 ] },
// { content: 'food', references: [ 1, 3 ] },
// { content: 'bag', references: [ 2 ] },
// { content: 'cutlery', references: [ 2 ] },
// { content: 'service', references: [ 2, 3 ] },
// { content: 'location', references: [ 2 ] },
// { content: 'kid', references: [ 2 ] },
// { content: 'speed', references: [ 2 ] },
// { content: 'taco', references: [ 3, 4 ] },
// { content: 'place', references: [ 3, 4 ] },
// { content: 'article', references: [ 3 ] },
// { content: 'fish', references: [ 3 ] },
// { content: 'establishment', references: [ 3 ] },
// { content: 'credit card', references: [ 4 ] },
// { content: 'special', references: [ 4 ] },
// { content: 'cod', references: [ 4 ] },
// { content: 'mango', references: [ 4 ] },
// { content: '$', references: [ 4 ] },
// { content: 'side', references: [ 4 ] },
// { content: 'team', references: [ 4 ] },
// { content: 'space', references: [ 4 ] },
// { content: 'street', references: [ 4 ] },
// { content: 'meat', references: [ 4 ] },
// { content: 'Mexican', references: [ 4 ] },
// { content: 'market', references: [ 4 ] },
// { content: 'trip', references: [ 4 ] } ]

// allConceptResults.forEach(function(concept) {
//   console.log(concept.content, concept.references.length);
// });
