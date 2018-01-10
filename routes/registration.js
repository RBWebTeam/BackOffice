 var express = require('express');
 var router = express.Router();
 validator = require('express-validator');

var Registration= require('../model/registration.js');
 dbconnection=require('../bin/dbconnection.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('registration', { title: 'Express' });

});

router.post('/registration-data', function(req, res, next) {
              request=new Registration(req.body);
              check_email(req.body.email,function(status){    isset =null;
                    
              //    console.log(status);
                   if(status==0){
                   dbconnection.query("INSERT INTO `registrations` (`id`, `firstName`, `last_name`, `phone`, `email`, `password`, `date_time`) VALUES (NULL, '"+req.body.firstName+"', '"+req.body.last_name+"', '"+req.body.phone+"', '"+req.body.email+"', '"+req.body.password+"', 'NULL')", function (err, result, fields) {
                   if (err) throw err;
                  });
                   isset=0;
                  }else{
                    isset=1;
                   }
                     result={'status':isset};
                     res.send(result);
           

        //           if(status==0){
        //             request.save(function(err) {
        //           if (err){ throw err;
        //           }else{ 
        //              isset=0;
        //           }      
        //           });
        //          }else{
        //          isset=1;
        //      }

        //  result={'status':isset};
        //  res.send(result);

       });
            

            


});

 function check_email(email,callback){
     status=null;
  dbconnection.query("SELECT  *  FROM registrations where email='"+email+"'", function (err, result, fields) {
    if (err) throw err;
               if(result.length > 0) {
                   status=1;
               }else{
                 status=0;
               } 
               callback(status);
  });
 

//  Registration.findOne({email:email},function(err, result){
//                 status=0;
//                if(result == null) {
//                    status=0;
//                }else{
//                  status=1;
//                } callback(status);
//  });  


 }

router.get('/insert', function(req, res, next) {
    
});

module.exports = router;
