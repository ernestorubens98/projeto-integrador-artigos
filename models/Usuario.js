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
            },
            is_admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },{
            tableName: "usuarios",
            timestamps: false
        }

    );
    usuario.associate = (models) => {
        usuario.belongsToMany(models.Artigos,{ through: models.Comentario });
        usuario.hasMany(models.Comentario);
        usuario.belongsToMany(models.Artigos,{ through: models.Notas });
        usuario.hasMany(models.Notas);
        usuario.belongsToMany(models.Artigos,{ through: models.Artigo_Autor });
        usuario.hasMany(models.Artigo_Autor);
        
    }
    return usuario
}

module.exports = Usuario;