 var express = require('express');
 var router = express.Router();
 var session = require('express-session');
 var validator = require('express-validator');
 var Registration= require('../model/registration.js');
 var dbconnection=require('../bin/dbconnection.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('registration', { title: 'Express' });
});

router.post('/registration-data', function(req, res, next) {
                                    request=new Registration(req.body);
                                    check_email(req.body.email,function(status){    isset =null; result=null;
                           if(      status=="200"){
                                    registration_save_fn(req,function(ins_data){  
                                    res.send({'status':'Success','data':'200'});           
                           });
                           }else{
                                    res.send({'status':'This name has already been used','data':'400'}); 
                           }
       });      
});

 function check_email(email,callback){ status=null;
                                   dbconnection.query("SELECT  *  FROM registrations where email='"+email+"'", function (err, result, fields) {
                       if (        err){
                  //status="500";
                  console.log(err);
                       }else{
                       if(result.length > 0) { status="400";  }else{  status="200";  } 
                       callback(status);   
           }
                 
  });
 }
 function registration_save_fn(req,callback){  status=null;
    dbconnection.query("INSERT INTO  `registrations` (`id`, `firstName`, `last_name`, `phone`, `email`, `password`, `date_time`) VALUES (NULL, '"+req.body.firstName+"', '"+req.body.last_name+"', '"+req.body.phone+"', '"+req.body.email+"', '"+req.body.password+"', 'NULL')", function (err, result, fields) {
           if (err){
                 console.log(err);
           }else{
                  callback("200");   
           }
           
      });
 }

// router.get('/insert', function(req, res, next) {
// });

module.exports = router;
