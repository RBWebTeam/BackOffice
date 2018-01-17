 var express = require('express');
 var router = express.Router();
 dbconnection=require('../bin/dbconnection.js');
 var session = require('express-session');

router.use(session({
    secret: "dprb",
    resave: true,
    saveUninitialized: true
}));


//router.use(session({secret: "chaos is a ladder."}));
/* GET users listing. */
router.get('/',isAuthenticated, function(req, res, next) {
     
    // console.log(req.session.last_login);
       res.render('dashboard', { title:'Express',usernameLogin:req.session.username,lastLogin:req.session.last_login });
});



function isAuthenticated(req, res, next) {

	 console.log(req.session.username)
  if (req.session.username)
      return next();
        res.redirect('/');
    //res.send("Not authorized");
}

module.exports = router;