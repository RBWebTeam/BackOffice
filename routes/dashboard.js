 var express = require('express');
 var router = express.Router();
 dbconnection=require('../bin/dbconnection.js');
 var session = require('express-session');

router.use(session({secret: "chaos is a ladder."}));
/* GET users listing. */
router.get('/',isAuthenticated, function(req, res, next) {
     
    // console.log(req.session.name);
       res.render('dashboard', { title:'Express',Login:req.session.name });
});


router.get('/user', function(req, res, next) {
      
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