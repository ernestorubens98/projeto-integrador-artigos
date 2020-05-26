const bcrypt = require("bcrypt");
const { check, validationResult, body } = require('express-validator');
const { sequelize, Artigo, Categoria, Nota, Comentario, Usuario } = require("../models");

const usuariosController = {    

    cadastrarUsuario: (req, res) => {

        let errors = validationResult(req);
        // if(!errors.isEmpty()) {
        //     console.log(errors);
        //     return res.render('cadastrar',{errors: errors.errors});

        // }
        
        let {nome, email, senha, areaAtuacao } = req.body;
        let foto_perfil = req.file.destination
        let senhaHash = bcrypt.hashSync(senha,12);

        Usuario.create({
            nome,
            email,
            senha: senhaHash,
            area_atuacao: areaAtuacao,
            foto_perfil,
            is_admin: false,
          }).then(result => {

            res.redirect('/login');

          }).catch(error => {           
            res.render('cadastrar',{error: error.errors});

          });
            
     
    },

    logarUsuario: async (req, res) => {
        
        let { email, senha } = req.body;

        const infoUser = await Usuario.findOne({
            where: {
                email
            }
        });

        if (!infoUser) {
            res.redirect('/login?error=1');
        }

        if (!bcrypt.compareSync(senha, infoUser.senha)) {
            res.redirect('/login?error=1');
        }

        res.redirect("/");            
     
    },

    


}

module.exports = usuariosController;