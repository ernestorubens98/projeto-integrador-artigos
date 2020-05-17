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
        categoria.belongsTo(models.Usuario,{foreignKey:'fk_usuario', as:'usuario'});
        categoria.hasMany(models.Comentario,{foreignKey:'fk_comentario', as:'comentarios'});
    }
    return categoria
}

module.exports = Categoria;