var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var app = express();

//var web = require('./routes/web');
var users = require('./routes/users');
var fba = require('./routes/FBA');
var login = require('./routes/login');
var  registration = require('./routes/registration');
var dashboard = require('./routes/dashboard');
var session = require('express-session');
var FSM_details = require('./routes/FSM_details');




app.use(session({ resave: true ,secret: '123456' , saveUninitialized: true}));
// set view engine to php-express
app.set('views', './views');
// app.engine('php', phpExpress.engine);
app.set('view engine', 'jade');
 
 
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images/icon', '1.png')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', web);
app.use('/users', users);
//app.use('/api', api);
app.use('/',login);
app.use('/registration', registration);
app.use('/dashboard', dashboard);
app.use('/fba-list', fba);
app.use('/fsm-details', FSM_details);
 

//app.use('/registration-data', registration);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
   //res.send('<h1>Page Not Found</h1>');
  // next(err);
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
