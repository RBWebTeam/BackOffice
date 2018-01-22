 var express = require('express');
 var router = express.Router({ strict: true });
 var dbconnection=require('../bin/dbconnection.js');
 var rp = require('request-promise');
 
var abc={
"mobNo":"8898540057",
"msgData":"dp",
"source":"web"
};

function sms(mob,mess){
return  options = {
    method: 'POST',
    uri: 'http://services.rupeeboss.com/LoginDtls.svc/xmlservice/sendSMS',
    body: {
         "mobNo":"8898540057",
"msgData":mess,
"source":"web"
    },
    json: true // Automatically stringifies the body to JSON
};

}
/* GET users listing. */
router.get('/',isAuthenticated, function(req, res, next) {

     dbconnection.query("CALL usp_load_fbalist_new('0')",function(err, rows){
            if (err) throw err;
           var jsonData = JSON.stringify(rows[0]);
           var javascriptObject = JSON.parse(jsonData);
           
           res.render('FBA/fba.jade', { title:'Express',Login:"dp",usernameLogin:req.session.username,lastLogin:req.session.last_login
               ,objs:javascriptObject }); 
            
     });


 
});

router.post('/sms',isAuthenticated, function(req, res, next) {
                        
              dbconnection.query("CALL usp_insertsmslog('"+ req.body.fbaid + "','" + req.body.mobile_no + "','" + req.body.sms + "')",function(err, rows){
              if (err) throw err;
           var jsonData = JSON.stringify(rows[0]);
           var javascriptObject = JSON.parse(jsonData);
               if(javascriptObject[0].result==0){
                               rp(sms(req.body.mobile_no,req.body.sms))
                                    .then(function (parsedBody) {
                                         res.send(parsedBody); 
                                         console.log(parsedBody);
                                    })
                                    .catch(function (err) {
                                         res.send(parsedBody); 
                                    });
                              
                           
                }
                
            
     });
});


router.post('/posp-update',isAuthenticated, function(req, res, next) {
                

                  dbconnection.query("CALL usp_update_posploanid('"+ req.body.fbaid + "','" + req.body.posp_name + "','" + req.body.flage_id + "')",function(err, rows){
                  if (err) throw err;
                  
                         res.send({'status':'0','data':'200'}); 
                  });
});



function isAuthenticated(req, res, next) {

	 console.log(req.session.username)
  if (req.session.username)
      return next();
        res.redirect('/');
    //res.send("Not authorized");
}


module.exports = router;
