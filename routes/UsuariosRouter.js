var express = require('express');
var router = express.Router();

const { check, validationResult, body } = require('express-validator');
const multer = require('multer');
const multerConfig = require('../config/multer');

const usuariosController = require("../controllers/usuariosController");

router.post('/cadastrar',[
    check('email').isEmail().withMessage('Digite um email valido!'),
    check('nome').isLength({min:3}).withMessage('Nome do usuario deve conter no minino 3 caracteres'),
    check('senha').isLength({min:6}).withMessage('Senha do usuario deve conter no minino 6 caracteres'),
    check('areaAtuacao').isLength({min:3}).withMessage('Area de atuacao deve conter pelo menos 3 caracteres')
], multer(multerConfig).single('foto_perfil'), usuariosController.cadastrarUsuario);

router.post('/login', usuariosController.logarUsuario);

module.exports = router;
