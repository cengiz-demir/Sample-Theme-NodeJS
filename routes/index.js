var express = require('express');
var router = express.Router();

// GET /about
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'About' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

module.exports = router;
