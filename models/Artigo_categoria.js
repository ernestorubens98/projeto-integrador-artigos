let Artigo_Categoria = (sequelize, DataTypes) => {
    let artigo_categoria  = sequelize.define(
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
            tableName: "artigos_categorias",
            timestamps: false
        }

    );
    artigo_categoria.associate = (models) => {
        artigo_categoria.belongsTo(models.Artigo,{foreignKey:'fk_artigo'});
        artigo_categoria.belongsTo(models.Categoria,{foreignKey:'fk_categoria'});
    }
    return artigo_categoria
}

module.exports = Artigo_Categoria;