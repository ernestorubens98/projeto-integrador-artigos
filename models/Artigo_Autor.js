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
                type: DataTypes.INTERGER,
                allowNull: false
            },
            fk_usuario: {
                type: DataTypes.INTERGER,
                allowNull: false
            },
            is_usuario:{
                type: DataTypes.BOOLEAN,
            },
            link:{
                type: DataTypes.VARCHAR,
            }
        },{
            tableName: "artigo_autores",
            timestamps: false
        }

    );
    artigo_autor.associate = (models) => {
        artigo_autor.belongsTo(models.Usuario,{foreignKey:'fk_usuario', as:'usuarios'});
        artigo_autor.belongsTo(models.Artigo,{foreignKey:'fk_artigo', as:'artigos'});
    }
    return artigo_autor
}

module.exports = Artigo_Autor;