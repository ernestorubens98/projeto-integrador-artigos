const { Artigo } = require("../models");
const { Op } = require("sequelize");

const ArtigoController = {
    showEscrevaArtigo: (req, res) => {
        res.render('escreva-artigo', { usuario: req.session.usuario })
    },

    buscaArtigoPorTitulo: async (req, res) => {
        console.log(req.query.titulo)
        const { titulo } = req.query

        let result = await Artigo.findAll({
            where: {
                titulo: {
                    [Op.like]: `%${titulo}%`
                }

            }
        })
        console.log(result)
        return res.send(result)
    }
}

module.exports = ArtigoController