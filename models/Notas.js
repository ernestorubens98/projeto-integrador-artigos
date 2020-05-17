let Nota = (sequelize, DataTypes) => {
    let nota  = sequelize.define(
        'Nota',
        {
            fk_usuario: {
                type: DataTypes.INTEGER,
                allowNull:false
            },
            fk_artigo: {
                type: DataTypes.INTEGER,
                allowNull:false
            },
            nota: {
                type: DataTypes.DECIMAL(4,2),
                allowNull:false
            }
        },{
            tableName: "notas",
            timestamps: false
        }

    );
    nota.associate = (models) => {
        nota.belongsTo(models.Usuario,{foreignKey:'fk_usuario', as:'usuario'});
        nota.hasMany(models.Comentario,{foreignKey:'fk_comentario', as:'comentarios'});
    }
    return artigo_Categoria
}

module.exports = Nota;