var express = require('express');
var router = express.Router();

const usuariosController = require("../controllers/usuariosController");

const { check, validationResult, body } = require('express-validator');

/* GET users listing. */

router.post('/cadastro',[
    check('email').isEmail().withMessage('Digite um email valido!'),
    check('nome').isLength({min:3}).withMessage('Nome do usuario deve conter no minino 3 caracteres'),
    check('senha').isLength({min:6}).withMessage('Senha do usuario deve conter no minino 6 caracteres'),
    check('areaAtuacao').isLength({min:3}).withMessage('Area de atuacao deve conter pelo menos 3 caracteres')
], usuariosController.cadastrarUsuario);
router.post('/login', usuariosController.logarUsuario);


module.exports = router;
