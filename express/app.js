var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var axios = require('axios');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sentiment = require('./public/javascripts/sentimentprocessor.js');

var app = express();

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
app.get('/1', (req, res) => {
  const sendStuff = (data) =>{
    console.log('in sendStuff');
    res.send(JSON.stringify(data))
  }
  var data = sentiment.getData('https://www.yelp.ca/biz/seven-lives-tacos-y-mariscos-toronto', sendStuff)
  console.log('/1');
  // console.log('before', data)
  // Promise.all(sentiment.getData()).then(responses => res.send(responses))
 //  res.send(JSON.stringify(data))
  
  // console.log('after', data)
});

app.post('/1', (req, res) => {
  console.log('full request', req)
  console.log('req body', req.body)
  res.send('made it')
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
