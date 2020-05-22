let Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario',
        {
            id_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
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
        }, {
        tableName: "usuarios",
        timestamps: false
    }

    );
    usuario.associate = (models) => {
        usuario.belongsToMany(models.Artigo, {
            foreignKey: 'fk_usuario',
            as: 'autorArtigos',
            through: models.Artigo_Autor
        });
        usuario.belongsToMany(models.Artigo, {
            foreignKey: 'fk_usuario',
            as: 'usuarioNotas',
            through: models.Nota
        });
        usuario.belongsToMany(models.Artigo, {
            foreignKey: 'fk_usuario',
            as: 'usuarioComentarios',
            through: {
                model: models.Comentario,
                unique: false
            }

        });
        usuario.hasMany(models.Comentario, {
            as: 'artigoComentario',
            foreignKey: 'fk_usuario',
            targetKey: 'id_usuario'
        });
    }
    return usuario
}

module.exports = Usuario;