 var express = require('express');
 var router = express.Router({ strict: true });
 var dbconnection=require('../bin/dbconnection.js');
// var session = require('express-session');
 var path    = require("path");

 


/* GET users listing. */
router.get('/',isAuthenticated, function(req, res, next) {
  res.render('Registration_Form', { title:'Express',Login:"dp" });
    
});


function isAuthenticated(req, res, next) {

	 console.log(req.session.name)
  if (req.session.name)
      return next();
        res.redirect('/');
    //res.send("Not authorized");
}


module.exports = router;
