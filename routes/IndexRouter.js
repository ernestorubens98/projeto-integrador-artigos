var express = require('express');
var router = express.Router();
const Controller = require("../controllers/Controller");

/* GET home page. */
router.get('/', Controller.showIndex);

/* About page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/login', Controller.showLogin);

router.get('/cadastrar', Controller.showCadastrar);

router.get('/perfil', Controller.showPerfil);

module.exports = router;
