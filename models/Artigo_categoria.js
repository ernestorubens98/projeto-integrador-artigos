let Artigo_Categoria = (sequelize, DataTypes) => {
    let artigo_Categoria  = sequelize.define(
        'Artigo_Categoria',
        {
            fk_artigo: {
                type: DataTypes.INTEGER,
                allowNull:false
            },
            fk_categoria: {
                type: DataTypes.INTEGER,
                allowNull:false
            }
        },{
            tableName: "artigo_Categorias",
            timestamps: false
        }

    );
    artigo_Categoria.associate = (models) => {
        artigo_Categoria.belongsTo(models.Usuario,{foreignKey:'fk_usuario', as:'usuario'});
        artigo_Categoria.hasMany(models.Comentario,{foreignKey:'fk_comentario', as:'comentarios'});
    }
    return artigo_Categoria
}

module.exports = Artigo_Categoria;