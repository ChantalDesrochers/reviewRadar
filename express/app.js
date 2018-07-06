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
var parse = require("./parsingFunctions.js")


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


var reportData = []

var sentData = {
  // reviews: reportData // live,
  // allConcepts: conceptAggregator(reportData),
  // monthConcepts: datedAggregator(parseReviewsbyDate(reportData))
  reviews: Ratings,
  allConcepts: parse.conceptAggregator(Ratings),
  // monthConcepts: datedAggregator(parseReviewsbyDate(Ratings))
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
    // allConcepts = conceptAggregator(data)
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
