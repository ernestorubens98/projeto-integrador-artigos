let Comentario = (sequelize, DataTypes) => {
    let comentario  = sequelize.define(
        'Comentario',
        {
            id_comentario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            texto_comentario: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_usuario: {
                type: DataTypes.INTERGER,
                allowNull: false
            },
            fk_artigo: {
                type: DataTypes.INTERGER,
                allowNull: false
            },
            data:{
                type: DataTypes.DATETIMES,
            }
        },{
            tableName: "comentarios",
            timestamps: false
        }

    );
    comentario.associate = (models) => {
        comentario.belongsTo(models.Usuario,{foreignKey:'fk_usuario', as:'usuarios'});
        comentario.belongsTo(models.Artigo,{foreignKey:'fk_artigo', as:'artigos'});
    }
    return comentario
}

module.exports = Comentario;