 var express = require('express');
 var router = express.Router({ strict: true });
 var dbconnection=require('../bin/dbconnection.js');
var async = require('async');
 var path    = require("path");

  


/* GET users listing. */
router.get('/', function(req, res, next) {
                         
                  res.render('FSM/FsmDetails', { title:'Express',Login:req.session.name });    
 

});


 

module.exports = router;
