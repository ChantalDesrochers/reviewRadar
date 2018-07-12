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
const fs = require('fs');

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

var savedFile = {
  reviews: [],
  organizedConcepts: [],
  monthConcepts: [],
}

var sentData = {
  //live
  nameL: 'Momofuku',
  reviewsL: reportData, //
  organizedConceptsL: parse.conceptAggregator(reportData),
  monthConceptsL: parse.datedAggregator(parse.parseReviewsByDate(reportData)),
  //hardcoded
  name: 'Momofuku',
  reviews: Ratings,
  organizedConcepts: parse.conceptAggregator(Ratings),
  monthConcepts: parse.datedAggregator(parse.parseReviewsByDate(Ratings))
}


app.get('/1', (req, res) => {
  res.send(JSON.stringify(sentData))
})

app.post('/1', (req, res) => {
  // console.log('full request', req)
  // console.log('req body', req.body)
  sentData.nameL = req.body.name
  const sendStuff = (data) =>{
    // console.log('data added to object', JSON.stringify(data))
    data.forEach(function(review, i) {
      // review.id = i
      reportData.push(review)
    })
    // runs parse again after receiving the data
    oc = parse.conceptAggregator(reportData)
    mc = parse.datedAggregator(parse.parseReviewsByDate(reportData))
    sentData.organizedConceptsL = oc
    sentData.monthConceptsL = mc
    name = sentData.nameL
    savedFile = {
      name: name,
      reviews: reportData,
      organizedConcepts: oc,
      monthConcepts: mc
    }
    // console.log('savedFile added to object', JSON.stringify(savedFile))

    // console.log('liveData', sentData.monthConceptsL)

    fs.writeFileSync(`./results/output.json`, JSON.stringify(savedFile))
    // fs.writeFileSync(`report.json`, JSON.stringify(reportData))
    // fs.writeFileSync(`oconcepts.json`, JSON.stringify(oc))
    // fs.writeFileSync(`mconcepts.json`, JSON.stringify(mc))
    // <--- this is when mailer should fire
    // res.send('success')
  }

  
  if (req.body.url2 != '') {
    // console.log('url2 triggered')
    controller.getData([req.body.url1, req.body.url2], sendStuff)
  }
  else if (req.body.url1 != '') {
    // console.log('url1 triggered')
    controller.getData(req.body.url1, sendStuff)
  }

  // if (req.body.url3 != '') {
  //   console.log('url3 triggered')    
  //   var data3 = sentiment.getData(req.body.url3, sendStuff)
  // }
  res.send('success')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
