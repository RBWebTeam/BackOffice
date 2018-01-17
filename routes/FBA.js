 var express = require('express');
 var router = express.Router({ strict: true });
 var dbconnection=require('../bin/dbconnection.js');
 
 


/* GET users listing. */
router.get('/',isAuthenticated, function(req, res, next) {

    //  dbconnection.query("CALL usp_emp_login('"+ req.body.email + "','" + req.body.pwd + "')",function(err, rows){
    //         if (err) throw err;
    //        var jsonData = JSON.stringify(rows[0]);
    //        var javascriptObject = JSON.parse(jsonData);
            
    //  });


res.render('FBA/fba.jade', { title:'Express',Login:"dp",usernameLogin:req.session.username,lastLogin:req.session.last_login }); 

});


function isAuthenticated(req, res, next) {

	 console.log(req.session.username)
  if (req.session.username)
      return next();
        res.redirect('/');
    //res.send("Not authorized");
}


module.exports = router;
