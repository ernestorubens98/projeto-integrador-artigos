let Categoria = (sequelize, DataTypes) => {
    let categoria  = sequelize.define(
        'Categoria',
        {
            id_categoria: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            }  
        },{
            tableName: "categorias",
            timestamps: false
        }

    );
    categoria.associate = (models) => {
        categoria.belongsToMany(models.Artigo,{
            foreignKey:'fk_categoria',
            as: 'categoriaArtigos',
            through: models.Artigo_Categoria
        });
    }
    return categoria
}

module.exports = Categoria;