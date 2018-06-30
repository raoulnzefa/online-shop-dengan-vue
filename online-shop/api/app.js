// memasukkan
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// menambah route-route
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// mengatur app express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

// tambahan dari tutorial
app.all('/*', function(req, res, next) {
  // CORS header
  res.header("Access-Control-Allow-Origin", "*"); // membatasi kebutuhan domain
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
  //mengatur perubahan headers pada CORS
  res.header('Access-Control-Allow-Headers','Content-type,Accept,X-Access-token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  }else{
    next();
  }
});

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`);

module.exports = app;
