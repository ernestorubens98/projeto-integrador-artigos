let Usuario = (sequelize, DataTypes) => {
    let usuario  = sequelize.define(
        'Usuario',
        {
            id_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            area_atuacao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            foto_perfil: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },{
            tableName: "usuarios",
            timestamps: false
        }

    );
    usuario.associate = (models) => {
        usuario.hasMany(models.Artigo,{foreignKey:'fk_artigo', as:'artigos'});
        usuario.hasMany(models.Comentario,{foreignKey:'fk_comentario', as:'comentarios'});
    }
    return usuario
}

module.exports = Usuario;