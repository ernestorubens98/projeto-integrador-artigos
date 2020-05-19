let Artigo_Autor = (sequelize, DataTypes) => {
    let artigo_autor  = sequelize.define(
        'Artigo_Autor',
        {
            id_art_autor: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            fk_artigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            fk_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            is_usuario:{
                type: DataTypes.BOOLEAN,
            },
            link:{
                type: DataTypes.STRING,
            }
        },{
            tableName: "artigos_autores",
            timestamps: false
        }

    );
    artigo_autor.associate = (models) => {
        artigo_autor.belongsTo(models.Usuario,{foreignKey:'fk_usuario'});
        artigo_autor.belongsTo(models.Artigo,{foreignKey:'fk_artigo'});
    }
    return artigo_autor
}

module.exports = Artigo_Autor;