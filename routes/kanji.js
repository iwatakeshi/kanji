var express = require('express');
var router = express.Router();
var kanji = require('../public/javascripts/kanji.js');
console.log(kanji());
/* GET users listing. */
router.get('/', function(req, res) {
  res.json(kanji().grade('first'));
});

module.exports = router;
