var express = require('express');
var router = express.Router();

const { check, validationResult, body } = require('express-validator');
const multer = require('multer');

const multerConfig = require('../config/multer');
const usuarioController = require("../controllers/UsuarioController");
const usuarioLogado = require('../middlewares/usuarioLogado');

router.get('/login', usuarioController.showLogin);
router.post('/login', [check('email').isEmail().withMessage('Digite um email válido!')], usuarioController.logarUsuario);

router.get('/esqueceu-senha', usuarioController.esqueceuSenha);

router.get('/cadastrar', usuarioController.showCadastrar);
router.post('/cadastrar', multer(multerConfig).single('foto_perfil'), usuarioController.cadastrarUsuario);

router.get('/perfil/:id', usuarioController.showPerfil);

router.get('/logout', usuarioLogado,usuarioController.logoutUsuario);



module.exports = router;
