var express = require('express');
var router = express.Router();
var config = require('../config.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: config.title,
    tags: [
      {name: 'Swift'},
      {name: 'Objective-C'},
      {name: 'JavaScript'},
      {name: 'Python'},
    ]
  });
});

module.exports = router;
