var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
// const config = require('../config/config');
const logger1 = require('./utils/logger');

let log = (message) => {
    logger1(__filename, message);
}

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api.route');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const options = {
  useNewUrlParser: true,
  // reconnectTries: Number.MAX_VALUE,
  // poolSize: 10
};
log('db..')
mongoose.connect('mongodb+srv://pms:pmspms@starter-cluster-mzdjw.mongodb.net/PrdManSys?retryWrites=true', options).then((db) => {
  console.log('connected to db')
  log('connected to DB');
  return db
}).catch(() => {
  log('Error connecting to DB',e);
  process.exit(1);
});

app.use('/', indexRouter);
app.use('/api', apiRouter);

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
  // res.render('error');
});

module.exports = app;
