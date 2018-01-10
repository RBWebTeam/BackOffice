 var express = require('express');
 var router = express.Router();
 dbconnection=require('../bin/dbconnection.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Dashboard');
});