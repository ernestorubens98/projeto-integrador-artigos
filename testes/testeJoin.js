const { sequelize, Artigo, Categoria, Nota, Usuario, Comentario } = require('../models');

//SELECT * FROM artigos LEFT OUTER JOIN ( artigos_categorias INNER JOIN categorias ON categorias.id_categoria = artigos_categorias.fk_categoria) ON artigos.id_artigo = artigos_categorias.fk_artigo;
Artigo.findAll({
    include: [
        {
            model: Categoria,
            as: 'artigoCategorias'
        },
        {
            model: Usuario,
            as: 'artigoAutores',
            where: {
                id_usuario: 3
            }
        }
    ]    
}
).then(
    data => {        
        console.log(JSON.stringify(data.map(u => u.toJSON())));
        console.log(data.map(u => u.toJSON()));
        sequelize.close();
    }
)