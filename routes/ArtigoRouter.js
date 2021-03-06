var express = require('express');
var router = express.Router();

const ArtigoController = require("../controllers/ArtigoController");
const usuarioLogado = require('../middlewares/usuarioLogado');


/* GET users listing. */
router.get('/escreva-artigo', usuarioLogado, ArtigoController.showEscrevaArtigo)

router.get('/artigo/:id', ArtigoController.buscaById);


module.exports = router;