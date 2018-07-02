var request = require("request");

inputReviewArray = [
  {
    id: 0,
    rating: "4.0",
    author: "Ksenja T.",
    description:
      "I tried Impact Kitchen when it first opened via Uber eats. They were still working out a few kinks, especially with regard to portion size, which I found to be too small.\n\nThey have since improved a lot, adding a lot of different menu items and to-go options. Angela runs a tight ship and this is now one of my go-to spots. The only downside is that it is fairly expensive.\n\nMy favorite items on the menu are the winter citrus salad with falafel add-on; chicken bone broth, thai butternut squash soup (delicious!) and the halo power bowl.\n\nThe collagen chocolate pudding is an amazing dessert for when those cravings kick in.",
    datePublished: "2017-04-12",
    label: "positive",
    score: 0.0647312
  },
  {
    id: 1,
    rating: "5.0",
    author: "Jacquie O.",
    description:
      'This place tastes "healthy" in the way that means "fresh" and not as a euphemism for "bland". Ordered a workplace dinner from here on hungrhub. Food arrived on time, of good quality, flavourful and pretty. Prices very reasonable and falafel is even moist!\n\nYum',
    datePublished: "2017-11-29",
    label: "positive",
    score: 0.749361
  },
  {
    id: 2,
    rating: "3.0",
    author: "Ana C.",
    description:
      "Annoyed at the very slow slow service. \nFor the price and location I expect at least a bag and some cutlery.\nI had to ask for a bag, and they didn't bother putting in napkins and cutlery.\n\nI waiting 10 min for an iced americano when there was no one ahead of me. \n\nFor an experience that is set up to be streamline,\nthey need to stop hiring kids and speed things up asap.",
    datePublished: "2017-10-06",
    label: "negative",
    score: -0.38222
  },
  {
    id: 3,
    rating: "5.0",
    author: "Matt B.",
    description:
      "Excellent taco stand with great food to go along with good prices and service.  I found about this place from an article on Blog.To.   I had the Baja fish haddock tacos and they were among the best tacos I had anywhere, and that includes those made in Texas or California.    \n\nThere is very limited seating and it is cash only.    But I am not going to let that cost them a five-star review by making Seven Lives out to be something that it is not.    I would strongly suggest this establishment if you are craving for tacos, enough said.",
    datePublished: "2018-06-22",
    label: "positive",
    score: 0.165046
  },
  {
    id: 4,
    rating: "5.0",
    author: "Aastha S.",
    description:
      "Went here during my first trip to Kensington, and found their tacos to be just pure deliciousness! I tried their daily special - blackened cod with mango/pineapple salsa, and for $7, it was the right proportion and flavours! The only down side is there is always a line-up and barely any space to eat indoors, so we ended up eating on the street. \n\nThe place offers a variety of vegetarian and meat options, and has their own take on the authentic Mexican tacos. Best to park nearby and walk here as part of your Kensington market loop. Also remember to bring cash and they don't accept credit cards! \n\nDefinitely coming back for some more another day!",
    datePublished: "2018-06-10",
    label: "positive",
    score: 0.336056
  }
];
encodedArray = [];

// inputReviewArray.forEach(function(review) {
//   encodedArray.push(encodeURI(review.description));
// });

// console.log(encodedArray);

// preEncoded = [
//   "I%20tried%20Impact%20Kitchen%20when%20it%20first%20opened%20via%20Uber%20eats.%20They%20were%20still%20working%20out%20a%20few%20kinks,%20especially%20with%20regard%20to%20portion%20size,%20which%20I%20found%20to%20be%20too%20small.%0A%0AThey%20have%20since%20improved%20a%20lot,%20adding%20a%20lot%20of%20different%20menu%20items%20and%20to-go%20options.%20Angela%20runs%20a%20tight%20ship%20and%20this%20is%20now%20one%20of%20my%20go-to%20spots.%20The%20only%20downside%20is%20that%20it%20is%20fairly%20expensive.%0A%0AMy%20favorite%20items%20on%20the%20menu%20are%20the%20winter%20citrus%20salad%20with%20falafel%20add-on;%20chicken%20bone%20broth,%20thai%20butternut%20squash%20soup%20(delicious!)%20and%20the%20halo%20power%20bowl.%0A%0AThe%20collagen%20chocolate%20pudding%20is%20an%20amazing%20dessert%20for%20when%20those%20cravings%20kick%20in.",
//   "This%20place%20tastes%20%22healthy%22%20in%20the%20way%20that%20means%20%22fresh%22%20and%20not%20as%20a%20euphemism%20for%20%22bland%22.%20Ordered%20a%20workplace%20dinner%20from%20here%20on%20hungrhub.%20Food%20arrived%20on%20time,%20of%20good%20quality,%20flavourful%20and%20pretty.%20Prices%20very%20reasonable%20and%20falafel%20is%20even%20moist!%0A%0AYum",
//   "Annoyed%20at%20the%20very%20slow%20slow%20service.%20%0AFor%20the%20price%20and%20location%20I%20expect%20at%20least%20a%20bag%20and%20some%20cutlery.%0AI%20had%20to%20ask%20for%20a%20bag,%20and%20they%20didn't%20bother%20putting%20in%20napkins%20and%20cutlery.%0A%0AI%20waiting%2010%20min%20for%20an%20iced%20americano%20when%20there%20was%20no%20one%20ahead%20of%20me.%20%0A%0AFor%20an%20experience%20that%20is%20set%20up%20to%20be%20streamline,%0Athey%20need%20to%20stop%20hiring%20kids%20and%20speed%20things%20up%20asap.",
//   "Excellent%20taco%20stand%20with%20great%20food%20to%20go%20along%20with%20good%20prices%20and%20service.%20%20I%20found%20about%20this%20place%20from%20an%20article%20on%20Blog.To.%20%20%20I%20had%20the%20Baja%20fish%20haddock%20tacos%20and%20they%20were%20among%20the%20best%20tacos%20I%20had%20anywhere,%20and%20that%20includes%20those%20made%20in%20Texas%20or%20California.%20%20%20%20%0A%0AThere%20is%20very%20limited%20seating%20and%20it%20is%20cash%20only.%20%20%20%20But%20I%20am%20not%20going%20to%20let%20that%20cost%20them%20a%20five-star%20review%20by%20making%20Seven%20Lives%20out%20to%20be%20something%20that%20it%20is%20not.%20%20%20%20I%20would%20strongly%20suggest%20this%20establishment%20if%20you%20are%20craving%20for%20tacos,%20enough%20said.",
//   "Went%20here%20during%20my%20first%20trip%20to%20Kensington,%20and%20found%20their%20tacos%20to%20be%20just%20pure%20deliciousness!%20I%20tried%20their%20daily%20special%20-%20blackened%20cod%20with%20mango/pineapple%20salsa,%20and%20for%20$7,%20it%20was%20the%20right%20proportion%20and%20flavours!%20The%20only%20down%20side%20is%20there%20is%20always%20a%20line-up%20and%20barely%20any%20space%20to%20eat%20indoors,%20so%20we%20ended%20up%20eating%20on%20the%20street.%20%0A%0AThe%20place%20offers%20a%20variety%20of%20vegetarian%20and%20meat%20options,%20and%20has%20their%20own%20take%20on%20the%20authentic%20Mexican%20tacos.%20Best%20to%20park%20nearby%20and%20walk%20here%20as%20part%20of%20your%20Kensington%20market%20loop.%20Also%20remember%20to%20bring%20cash%20and%20they%20don't%20accept%20credit%20cards!%20%0A%0ADefinitely%20coming%20back%20for%20some%20more%20another%20day!"
// ];

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

function iterateWithDelay(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    (function(i) {
      setTimeout(function() {
        requester(array[i], parseMC);
      }, 750 * i);
    })(i);
  }
}

parseMC = review => (error, response, body) => {
  review.concepts = [];
  let results = JSON.parse(body);
  if (results.status.msg === "OK") {
    results.concept_list.forEach(function(item) {
      if (item.relevance > 0) {
        // threshold of relevance
        review.concepts.push({
          content: item.form,
          position: review.id
        });
      }
    });
    console.log(review);
  } else {
    console.log("error occured", results.status);
  }
};

iterateWithDelay(inputReviewArray);

// request(options, callback, api_key, urlencodedtext);
