const checkForExisting = match => element => {
  return element.content == match;
};

const conceptAggreator = array => {
  let allConcepts = [];
  array.forEach(function(review) {
    review.concepts.forEach(function(concept) {
      // console.log(allConcepts.findIndex(checkForExisting(concept.content)));
     let existingIndex = allConcepts.findIndex(checkForExisting(concept.content));
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
  return allConcepts
};

// let parsingForMonth =

// var sortedArray = this.state.concepts.sort(function(a, b) {
//   return b.references.length - a.references.length
// });
// var topFive = sortedArray.slice(0,5)


// // console.log(topFive)

// const labels = topFive.map(x => x.content);
// //console.log(labels)

//   // console.log(this.state.conceptsTime)
// const keywordsPerMonth = {}
// var kwOverTime = this.state.conceptsTime;
// console.log(kwOverTime)
// let aoa = []
// let indexer = 0
// const kwPerMonth = () => {
//   labels.forEach(function(label) { // for each label
//     let pushData = []
//     pushData = [0,0,0,0,0,0,0,0,0,0,0,0] // creates an array for year
//     for (var month in kwOverTime) {  // for each month in the year object
//       kwOverTime[month].forEach(function(concept) { //for each concept in the month
//         if (label == concept.content) {
//           pushData[indexer] = concept.references.length
//         }
//     })
//     if (indexer < 12) {
//       indexer += 1
//     }
//     console.log('level 2')
//   }
//   console.log('level 3 - pushing', pushData)
//   aoa.push(pushData)
//   indexer = 0
//   })
// }
