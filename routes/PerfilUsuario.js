var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/perfil', function(req, res, next) {
  res.render('perfilUsuario');
});

module.exports = router;