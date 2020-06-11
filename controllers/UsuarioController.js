const bcrypt = require("bcrypt");
const { check, validationResult, body } = require('express-validator');
const { sequelize, Nota, Usuario, Artigo, Categoria } = require("../models");

const usuarioController = {

    showLogin: (req, res) => {
        let err = req.query.error
        res.render('login', { err });
    },

    logarUsuario: async (req, res) => {
        let { email, senha } = req.body;
        let erroEmail = validationResult(req)

        try {
            if (!erroEmail.isEmpty()) {
                throw new Error('ERROR_SINTAX_EMAIL')
            }
            const infoUser = await Usuario.findOne({ where: { email } });
            if (!infoUser) {
                throw new Error('EMAIL_NOT_FOUND')
            }

            let senhaValida = await bcrypt.compare(senha, infoUser.senha)
            if (!senhaValida) {
                throw new Error('ERROR_PASSWORD')
            }

            req.session.usuario = {
                nome: infoUser.nome,
                email: infoUser.email
            }
            res.redirect("/");
        } catch (err) {
            switch (err.message) {
                case 'ERROR_SINTAX_EMAIL':
                    return res.render('login', { err: erroEmail.errors });
                case 'EMAIL_NOT_FOUND':
                    return res.render('login', { error: 'Usuário ou senha inválida!' });
                default:
                    return res.render('login', { error: 'Usuário ou senha inválida!' });
            }
        }

    },

    esqueceuSenha(req, res) {
        res.render('esqueceu-senha')
    },

    showCadastrar: (req, res) => {
        res.render('cadastrar');
    },

    cadastrarUsuario: async (req, res) => {
        let { nome, email, senha, areaAtuacao } = req.body;
        let foto_perfil = '';

        if (typeof (req.file) != 'undefined') {
            foto_perfil = `${email}-${req.file.originalname}`
        }
        let senhaHash = await bcrypt.hash(senha, 12);

        await Usuario.create({
            nome,
            email,
            senha: senhaHash,
            area_atuacao: areaAtuacao,
            foto_perfil,
            is_admin: false,
        })
        return res.redirect('/usuario/login');
    },

    showPerfil: async (req, res, next) => {
        let { id } = req.params;

        let artigoResult = await Artigo.findAll({
            include: [
                {
                    model: Categoria,
                    as: 'artigoCategorias'
                },
                {
                    model: Usuario,
                    as: 'artigoAutores',
                    where: {
                        id_usuario: id
                    }
                }
            ]
        }).map(u => u.toJSON());

        console.log(artigoResult[0].id_artigo)


        let notaResult = await Nota.findAll({
            attributes: [
                'fk_artigo',
                [sequelize.fn('AVG', sequelize.col('nota')), 'mediaNota'],
                [sequelize.fn('count', sequelize.col('nota')), 'countNota']
            ],
            group: ['fk_artigo']
        }).map(u => u.toJSON());

        res.render('perfilUsuario', {
            'listaArtigos': artigoResult,
            'listaNotas': notaResult,
            usuario: req.session.usuario
        });
    },

    logoutUsuario: (req, res) => {
        req.session.usuario = undefined;
        res.redirect('/');
    }

}

module.exports = usuarioController;