 var express = require('express');
 var router = express.Router();
 var session = require('express-session');
 dbconnection=require('../bin/dbconnection.js');
 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login-authentication', function(req, res, next) {
  sess = req.session;
        Login_query(req,function(get_data){
            if(get_data==0){
               result={'status':0,'name':"Success...."};
            }else{
                result={'status':1,'name':"Come on now! Stop kidding, Enter correct email and password.."};
            }
            res.send(result);     
        });
});

router.get('/log-out', function(req, res, next) {
    req.session.destroy(function(err){
      if(err){
        console.log(err);
      }else{
        res.redirect('/');
      }
    });
});

function Login_query(req,callback){
        dbconnection.query("SELECT  firstName,email  FROM registrations where email='"+req.body.email+"' and  password='"+req.body.pwd+"' ", function (err, result, fields) {     
               if (err) throw err; 
               if(result.length > 0) {
                   sess.email=result[0].email;
                   sess.name=result[0].firstName;
                   callback(0);
                 }else{
                   callback(1);
                }  
           });
}

 // API TEST
router.get('/users-api', function(req, res, next) {
 dbconnection.query("SELECT  * FROM registrations",function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
});


 

module.exports = router;
