let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let passport = require('passport');

let indexRouter = require('./routes/index');
let userRouter = require('./routes/api/user');
let libraryRouter = require('./routes/api/library');

let app = express();
let port = process.env.PORT || 27017;

mongoose.connect(process.env.mongoURI || 'mongodb://localhost:27017/theater');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport Config
require('./config/passport.js')(passport);

// Passport Middleware
app.use(passport.initialize());

app.use('/api/library', libraryRouter);
app.use('/api/user', userRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.render('index');
});

module.exports = app;