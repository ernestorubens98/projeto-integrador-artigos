const { sequelize, Artigo, Categoria, Nota, Usuario, Comentario } = require('../models');

//SELECT * FROM artigos LEFT OUTER JOIN ( artigos_categorias INNER JOIN categorias ON categorias.id_categoria = artigos_categorias.fk_categoria) ON artigos.id_artigo = artigos_categorias.fk_artigo;
Artigo.findAll({
    include: [
        {
            model: Comentario,
            as: 'artigoComentario'
        },
         /* {
            model: Comentario,
            as: 'artigoComentario',
            attributes: ['id_comentario', 'texto_comentario'],
            include:
                [
                    {
                        model: Usuario, attributes: ['id_usuario']
                    }
                ]
        } */
    ]
}
).then(
    data => {
        console.log(JSON.stringify(data.map(u => u.toJSON())));
        console.log(data.map(u => u.toJSON()));
        sequelize.close();
    }
)