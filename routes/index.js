var express = require('express');
var shortUrl = require('node-url-shortener');
// const ImagesToPDF = require('images-pdf');
var convertapi = require('convertapi')('We3OnyZOUFLepqf3');


const Printer = require('pdfmake')
const axios = require('axios')
const path = require('path')
var router = express.Router();
var multer = require('multer');

const imagesToPdf = require("images-to-pdf")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/pdfdir')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})
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

router.get('/imagetopdf', async function(req, res, next) {
  // convertapi.convert('pdf', {
  //     File: './public/assets/img/CTET.jpg'
  // }, 'jpg').then(function(result) {
  //     result.saveFiles('./public/pdfdir');
  // });

  res.render('Imagetopdf')

});

router.post('/imagetopdf', upload.single('image'),async function(req, res, next) {
  // convertapi.convert('pdf', {
  //     File: `./public/pdfdir/${req.file.originalname}`
  // },).then(function(result) {
  //   //  const data =  result.saveFiles('./public/download');
  //   //  res.render('Imagetopdf',{data:result})
  // console.log(result.saveFiles);

  // });
    // await imagesToPdf(["./public/pdfdir/New Project.png"], "./public/download/combined.pdf")

  

});



 

module.exports = router;
