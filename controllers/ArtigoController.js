const { sequelize, Artigo, Categoria, Nota, Comentario } = require("../models");


const ArtigoController = {
    showEscrevaArtigo: (req, res) => {
        res.render('escreva-artigo', { usuario: req.session.usuario})
    }
}

module.exports = ArtigoController