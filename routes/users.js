 var express = require('express');
 var router = express.Router({ strict: true });
 var dbconnection=require('../bin/dbconnection.js');
 var async = require('async');
 var path    = require("path");

  


/* GET users listing. */
router.get('/',isAuthenticated, function(req, res, next) {                               
async.series({
        state_m: function(cb) {
            dbconnection.query("SELECT * from state_master", function (error, result, client){
                cb(error, result);
            })
        },
        authorities: function(cb){
            dbconnection.query("SELECT * from authorities ", function (error, result, client){
                cb(error, result)
            })
        }
    }, function(error, results) {
        if (!error) {
                    
             res.render('Registration_Form', { title:'Express',Login:"dp",state:results.state_m,authorities_:results.authorities});
        }
    });
});

 

router.post('/register', function(req, res, next) {       
    dbconnection.query("CALL usp_insert_emp_login_new('"+ req.body.username + "','" + req.body.emailid + "','" + req.body.password + "','" + req.body.emptype + "')",function(err, rows){
            if (err) throw err;
           var jsonData = JSON.stringify(rows[0]);
           var javascriptObject = JSON.parse(jsonData);
            if(javascriptObject[0].result==0){
                  res.send({'status':'Success','data':'200'}); 
            }else{
                  res.send({'status':'This name has already been used','data':'400'});
            }     
});   
});

  
function isAuthenticated(req, res, next) {
	 console.log(req.session.name)
  if (req.session.name)
      return next();
        res.redirect('/');
    //res.send("Not authorized");
}

module.exports = router;
