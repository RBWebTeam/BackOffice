 var express = require('express');
 var router = express.Router();
 dbconnection=require('../bin/dbconnection.js');
 
var session = require('express-session');
//var bodyParser = require('body-parser');
//var app = express();

 
router.use(session({ resave: true ,secret: '123456' , saveUninitialized: true}));
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login-authentication', function(req, res, next) {
  sess = req.session;
    status=null;
    data =null;
   dbconnection.query("SELECT  firstName,email  FROM registrations where email='"+req.body.email+"' and  password='"+req.body.pwd+"' ", function (err, result, fields) {     
              if (err) throw err; 
                
             //  sess={"email":result[0].email,"name":result[0].firstName};
                     
               if(result.length > 0) {
                   status=0;
                   sess.email=result[0].email;
                   sess.name=result[0].firstName;
                   data="success";
                 }else{
                   data="Come on now! Stop kidding, Enter correct email and password.";
                   status=1;
                } 
          
         result={'status':status,'name':data};
         res.send(result);
                
  });

});

router.get('/log-out', function(req, res, next) {
    
    req.session.destroy(function(err){
      if(err){
        console.log(err);
      }
      else
      {
        res.redirect('/');
      }
    });

});

module.exports = router;
