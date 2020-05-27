const bcrypt = require("bcrypt");
const { check, validationResult, body } = require('express-validator');
const { sequelize, Artigo, Categoria, Nota, Comentario, Usuario } = require("../models");

const usuarioController = {

    showLogin: (req, res) => {
        let err = req.query.error
        res.render('login', {err});
    },

    logarUsuario: async (req, res) => {
        let { email, senha } = req.body;

        const infoUser = await Usuario.findOne({
            where: {
                email
            }
        });

        try {
            if (await bcrypt.compare(senha, infoUser.senha)) {
                req.session.usuario = {
                    nome: infoUser.nome,
                    email: infoUser.email
                };
                res.redirect("/");
            } else {
                throw 'Usuário ou senha inválida!'
            }
        } catch (errors) {
            if (errors) {
                res.render('login', { err: errors })
            }

        }
    },

    esqueceuSenha(req, res) {
        res.render('esqueceu-senha')
    },

    showCadastrar: (req, res) => {
        res.render('cadastrar');
    },

    cadastrarUsuario: (req, res) => {

        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.log(errors);
            return res.render('cadastrar',{errors: errors.errors});

        }

        let { nome, email, senha, areaAtuacao } = req.body;

        let foto_perfil = '';

        if (typeof (req.file) != 'undefined') {
            foto_perfil = `${email}-${req.file.originalname}`
        }


        let senhaHash = bcrypt.hashSync(senha, 12);

        Usuario.create({
            nome,
            email,
            senha: senhaHash,
            area_atuacao: areaAtuacao,
            foto_perfil,
            is_admin: false,
        }).then(result => {

            res.redirect('/usuario/login');

        }).catch(error => {
            res.render('cadastrar', { error: error.errors });

        });
    },

    showPerfil: async (req, res, next) => {
        let id = req.params.id;

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