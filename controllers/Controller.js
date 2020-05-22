const { sequelize, Artigo, Categoria, Nota, Comentario } = require("../models");


const Controller = {

    showIndex: async (req, res) => {

        let artigoResult = await Artigo.findAll({
            include: [
                {
                    model: Categoria,
                    as: 'artigoCategorias'
                },
            ]
        }).map(u => u.toJSON());
        
        let notaResult = await Nota.findAll({
            attributes: [
                'fk_artigo',
                [sequelize.fn('AVG', sequelize.col('nota')), 'mediaNota'],
                [sequelize.fn('count', sequelize.col('nota')),'countNota']
            ],
            group: ['fk_artigo']
        }).map(u => u.toJSON());


        res.render('index',{
            'listaArtigos': artigoResult,
            'listaNotas': notaResult
        });

    },


}

module.exports = Controller;