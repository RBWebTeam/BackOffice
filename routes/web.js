var express = require('express');
var router = express.Router();
var session = require('express-session');
var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//app.use(cookieParser());

//export the module
module.exports = router;
