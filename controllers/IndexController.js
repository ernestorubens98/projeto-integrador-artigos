const { sequelize, Artigo, Categoria, Nota, Usuario } = require("../models");


const Controller = {

    showIndex: async (req, res) => {

        let artigoResult = await Artigo.findAll({
            include: [
                {
                    model: Categoria,
                    as: 'artigoCategorias'
                },
                {
                    model: Usuario,
                    as: 'artigoAutores'
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


        res.render('index', {
            'listaArtigos': artigoResult,
            'listaNotas': notaResult,
            usuario: req.session.usuario
        });

    }
}

module.exports = Controller;