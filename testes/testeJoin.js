const { sequelize, Artigo, Categoria, Nota, Usuario } = require('../models');

Artigo.findAll({
    include: {
        model: Categoria,
    as: 'artigoCategorias'
    }
}
).then(
    data => {
        console.log(JSON.stringify(data.map(u => u.toJSON())));
        console.log(data.map(u => u.toJSON()));
        sequelize.close();
    }
)
