var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var axios = require('axios');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var controller = require('./public/javascripts/controller.js');

var app = express();

var Ratings = require("./ratings.js")


// view engine setup
app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

checkForExisting = match => element => {
  console.log('passed into match', match)
  console.log('passed into element', element)
  return element.content == match;
};

conceptAggreator = array => {
  array.forEach(function(review) {
    review.concepts.forEach(function(concept) {
      // console.log(allConcepts.findIndex(checkForExisting(concept.content)));
      // console.log('before passing into existing', concept.content)
      let existingIndex = allConcepts.findIndex(checkForExisting(concept.content));
      if (existingIndex < 0) {
        allConcepts.push({
          content: concept.content,
          references: [review.id]
        });
      } else {
        allConcepts[existingIndex].references.push(review.id);
      }
    })
  });
  console.log('concept aggregator done')
  return allConcepts
};

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
    arrayAggregator(object[month], month, returnObj)
  }
  return returnObj
}

var kwOverTime = this.state.conceptsTime;
console.log(kwOverTime)
let aoa = []
let indexer = 0
const kwPerMonth = () => {
  labels.forEach(function(label) { // for each label
    let pushData = []
    pushData = [0,0,0,0,0,0,0,0,0,0,0,0] // creates an array for year
    for (var month in kwOverTime) {  // for each month in the year object
      kwOverTime[month].forEach(function(concept) { //for each concept in the month
        if (label == concept.content) {
          pushData[indexer] = concept.references.length
        }
    })
    if (indexer < 12) {
      indexer += 1
    }

  }

  aoa.push(pushData)
  indexer = 0
  })
}

var reportData = []

let allConcepts = [];

let monthlyConcepts = []

var sentData = {
  // reviews: reportData // live,
  reviews: Ratings,
  allConcepts: conceptAggreator(Ratings),
  // monthlyKeywords: monthlyConcepts
}


app.get('/1', (req, res) => {
  res.send(JSON.stringify(sentData))
})

app.post('/1', (req, res) => {
  // console.log('full request', req)
  console.log('req body', req.body)
  const sendStuff = (data) =>{
    // console.log('in sendStuff');
    // console.log(data)
    data.forEach(function(review, i) {
      // review.id = i
      reportData.push(review)
    })
    allConcepts = conceptAggreator(data)
    res.send('success')
  }

  if (req.body.url1 != '') {
    controller.getData(req.body.url1, sendStuff)
  }

  // if (req.body.url2 != '') {
  // var data2 = sentiment.getData(req.body.url2, sendStuff)
  // }

  // if (req.body.url3 != '') {
  // var data3 = sentiment.getData(req.body.url3, sendStuff)
  // }

  // res.send('success')
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// sentiment.getData()

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
