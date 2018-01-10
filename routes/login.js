 var express = require('express');
 var router = express.Router();
 dbconnection=require('../bin/dbconnection.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login-authentication', function(req, res, next) {
    status=null;
    data =null;
   dbconnection.query("SELECT  email,password  FROM registrations where email='"+req.body.email+"' and  password='"+req.body.pwd+"' ", function (err, result, fields) {     
              if (err) throw err; 
               if(result.length > 0) {
                   status=0;
                   data="success";
                 }else{
                   data="Come on now! Stop kidding, Enter correct email and password.";
                   status=1;
                } 
          
          result={'status':status,'name':data};
          res.send(result);
                
  });


});
module.exports = router;
