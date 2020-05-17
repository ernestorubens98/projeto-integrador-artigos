let Artigo = (sequelize, DataTypes) => {
    let artigo  = sequelize.define(
        'Artigo',
        {
            id_artigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            titulo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            resumo: {
                type: DataTypes.STRING,
                allowNull: false
            },            
            arquivo_artigo: {
                type: DataTypes.STRING,
                allowNull: true
            }       
        },{
            tableName: "artigos",
            timestamps: false
        }

    );
    artigo.associate = (models) => {
        artigo.belongsToMany(models.Usuario,{ through: models.Artigo_Autor });
        artigo.hasMany(models.Artigo_Autor);
        artigo.belongsToMany(models.Usuario,{ through: models.Comentario });
        artigo.hasMany(models.Comentario);
        artigo.belongsToMany(models.Categoria,{ through: models.Artigo_Categoria });
        artigo.hasMany(models.Artigo_Categoria);
        artigo.belongsToMany(models.Usuario,{ through: models.Notas });
        artigo.hasMany(models.Notas);
    }
    return artigo
}

module.exports = Artigo;