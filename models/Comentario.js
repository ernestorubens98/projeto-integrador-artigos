let Comentario = (sequelize, DataTypes) => {
    let comentario  = sequelize.define(
        'Comentario',
        {
            id_comentario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false,
                unique: true
            },            
            fk_usuario: {
                type: DataTypes.INTEGER,               
                allowNull: false,
                unique: false
            },
            fk_artigo: {
                type: DataTypes.INTEGER,               
                allowNull: false,
                unique: false
            },
            texto_comentario: {
                type: DataTypes.STRING,
                allowNull: false
            },
            data:{
                type: DataTypes.DATE,
            }
        },{
            tableName: "comentarios",
            timestamps: false
        },
        {
            indexes: [
              {
                unique: true,
                fields: ["id_comentario",'fk_usuario','fk_artigo']
              }
            ]
          }

    );
    comentario.associate = (models) => {
        comentario.belongsTo(models.Usuario,{foreignKey:'fk_usuario', unique: false});
        comentario.belongsTo(models.Artigo,{foreignKey:'fk_artigo', unique: false});
    }
    return comentario
}

module.exports = Comentario;