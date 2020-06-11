const { Artigo, Usuario, Comentario } = require("../models");
const { Op } = require("sequelize");

const ArtigoController = {
    showEscrevaArtigo: (req, res) => {
        res.render('escreva-artigo', { usuario: req.session.usuario })
    },

    buscaById: async (req, res) => {
        const { id } = req.params

        let artigo = await Artigo.findOne({
            include: [
                {
                    model: Usuario,
                    as: 'artigoAutores'
                },
                {
                    model: Comentario,
                    as: 'artigoComentario'
                }
            ],
            where: {
                id_artigo: id
            }
        })

        console.log(artigo.artigoComentario[0])
        return res.render('artigo', { artigo })
    }
}

module.exports = ArtigoController

