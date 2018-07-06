var Ratings = require("./ratings.js");

// generic check for existing
checkForExisting = match => element => {
  return element.content == match;
};

// parses into full object (not separated by month), and sorts by length
conceptAggregator = array => {
  let allConcepts = [];
  array.forEach(function(review) {
    review.concepts.forEach(function(concept) {
      let existingIndex = allConcepts.findIndex(
        checkForExisting(concept.content)
      );
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
  console.log("allConceptsReady");
  return allConcepts.sort(function(a, b) {
    return b.references.length - a.references.length;
  });
};

// *FUNCTIONS FOR MONTHLY KEYWORD CHART
// parses entire array into monthly
function parseReviewsByDate(reviews) {
  let datedReviews = {
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    Jun: [],
    Jul: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: []
  };
  reviews.forEach(function(review) {
    switch (review.datePublished.split("-")[1]) {
      case "01":
        datedReviews.Jan.push(review);
        break;
      case "02":
        datedReviews.Feb.push(review);
        break;
      case "03":
        datedReviews.Mar.push(review);
        break;
      case "04":
        datedReviews.Apr.push(review);
        break;
      case "05":
        datedReviews.May.push(review);
        break;
      case "06":
        datedReviews.Jun.push(review);
        break;
      case "07":
        datedReviews.Jul.push(review);
        break;
      case "08":
        datedReviews.Aug.push(review);
        break;
      case "09":
        datedReviews.Sep.push(review);
        break;
      case "10":
        datedReviews.Oct.push(review);
        break;
      case "11":
        datedReviews.Nov.push(review);
        break;
      case "12":
        datedReviews.Dec.push(review);
        break;
    }
  });
  return datedReviews;
}

// used by date aggregator, for each month
const arrayAggregator = (array, month, returnObj) => {
  array.forEach(function(review) {
    review.concepts.forEach(function(concept) {
      let existingIndex = returnObj[month].findIndex(
        checkForExisting(concept.content)
      );
      if (existingIndex < 0) {
        returnObj[month].push({
          content: concept.content,
          references: [review.id]
        });
      } else {
        returnObj[month][existingIndex].references.push(review.id);
      }
    });
  });
};

// takes in result of parseReviewByDate(allReviews)
const datedAggregator = object => {
  let returnObj = {
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    Jun: [],
    Jul: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: []
  };
  for (let month in object) {
    arrayAggregator(object[month], month, returnObj);
  }
  console.log('monthConcepts ready');
  return returnObj;
};

// functions used to parse from monthly concepts into data sizes for chart
// var kwOverTime = this.state.conceptsTime;
// console.log(kwOverTime);
const kwPerMonth = () => {
  let aoa = [];
  let indexer = 0;
  labels.forEach(function(label) {
    // for each label
    let pushData = [];
    pushData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // creates an array for year
    for (var month in kwOverTime) {
      // for each month in the year object
      kwOverTime[month].forEach(function(concept) {
        //for each concept in the month
        if (label == concept.content) {
          pushData[indexer] = concept.references.length;
        }
      });
      if (indexer < 12) {
        indexer += 1;
      }
    }
    aoa.push(pushData);
    indexer = 0;
  });
  return aoa
};

module.exports = {
  conceptAggregator: conceptAggregator,
  datedAggregator: datedAggregator,
  parseReviewsByDate: parseReviewsByDate
}
