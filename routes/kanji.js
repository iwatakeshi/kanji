var express = require('express');
var router = express.Router();
var kanji = require('../public/javascripts/kanji.js');
/* GET users listing. */
router.get('/', function(req, res) {
  res.json(kanji().grade('first'));
});

module.exports = router;
