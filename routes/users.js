 var express = require('express');
 var router = express.Router({ strict: true });
 var dbconnection=require('../bin/dbconnection.js');
var async = require('async');
 var path    = require("path");

  


/* GET users listing. */
router.get('/',isAuthenticated, function(req, res, next) {
                         
                    // var data=   registration_save_fn(function(data){ return data; } );             
                  
 

async.series({
        slider: function(cb) {
            dbconnection.query("SELECT * from state_master ORDER BY state_id ASC LIMIT  5", function (error, result, client){
                cb(error, result);
            })
        },
        new: function(cb){
            dbconnection.query("SELECT * from state_master ORDER BY state_id ASC LIMIT  1 ", function (error, result, client){
                cb(error, result)
            })
        }
    }, function(error, results) {
        if (!error) {
            
             res.render('Registration_Form', { title:'Express',Login:"dp",state:results.slider });
        }
    });




});


//   state master
 function registration_save_fn(callback){ 
         dbconnection.query("SELECT * from state_master", function (err, result, fields) {
                    if (err) throw err;
                     return  callback(result);
         });     
 }

function isAuthenticated(req, res, next) {

	 console.log(req.session.name)
  if (req.session.name)
      return next();
        res.redirect('/');
    //res.send("Not authorized");
}


module.exports = router;
