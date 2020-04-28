var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/criarartigo', function(req, res, next) {
  res.render('escreva-artigo');
});

router.get('/artigo', function(req, res, next) {
  res.render('artigo');
});

module.exports = router;