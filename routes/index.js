var express = require('express');
var shortUrl = require('node-url-shortener');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.post('/short', function(req, res, next) {
  shortUrl.short(req.body.data, function(err, url){
  res.send(url);
  // https://www.npmjs.com/package/yoastseo
});
});


 

module.exports = router;
