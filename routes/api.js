var express = require('express');
var router = express.Router();
var con=require('../bin/dbconnection.js');
var User = require('../model/user.js');
var Request_model = require('../model/request.js');
var session = require('express-session');
var app = express();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Calling Api........');
});
router.use(session({secret: "chaos is a ladder."}));
//route to authenticate user
router.post('/authenticate', function(req, res, next) {
     check_auth_in_db(req.body.email,req.body.pwd,function (data){
         error=data?"":"Come on now! Stop kidding, Enter correct email and password.";
         status=data?1:0;
         result={'status':status,'name':data,'error':error};
         res.send(result);
     }); 
});
//check authentication
function check_auth_in_db(email,pwd,callback){
User.find({ username: email,password:pwd }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
  name=user[0]?user[0].name:"";
  
  callback(name);
});
}
//register the user
router.post('/save-req', function(req, res, next) {
    status=0;
    data="";
    err="Something went wrong";
    request=new Request_model(req.body);
    // create a new user called chris
 

// call the built-in save method to save to the database
request.save(function(err) {
  
  if (err) response=make_response(0,"","Something went wrong");;

  response=make_response(1,"data saved successfully","");
  res.send(response);
});
});

function make_response(status,data,err){
    return {'status':status,'data':data,'error':err};
}






function isAuthenticated(req, res, next) {
  if (req.session.user && req.session.user.authenticated)
      return next();
//  res.redirect('/');
    res.send("Not authorized");
}
//router.get('/set-sess', function(req, res, next) {
//    app.use(session({ resave: true ,secret: '123456' , saveUninitialized: true}));
//    req.session.user = {"authenticated":true};
//   
//    res.send("session is set");
//});
//router.get('/get-sess', function(req, res, next) {
//
//    res.send(req.session);
//});
//router.get('/del-sess', function(req, res, next) {
//    req.session.destroy();
//    res.send("session destroyed");
//});
//router.get('/auth',isAuthenticated ,function(req, res, next) {
//
//    res.send("authorize user");
//});


module.exports = router;
