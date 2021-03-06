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
            },
            createdAt:{
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            updatedAt:{
                type: DataTypes.DATE,
            }
        },{
            tableName: "artigos",
        }

    );
    artigo.associate = (models) => {
        artigo.belongsToMany(models.Usuario,{
            foreignKey:'fk_artigo',
            as: 'artigoAutores',
            through: models.Artigo_Autor
        });
        artigo.belongsToMany(models.Usuario,{
            foreignKey:'fk_artigo',
            as: 'artigoNotas',
            through: models.Nota
        });
        artigo.hasMany(models.Nota,{            
            as: 'artigoNota',
            foreignKey: 'fk_artigo',
            targetKey: 'id_artigo'});
        artigo.belongsToMany(models.Usuario,{
            foreignKey:'fk_artigo',
            as: 'artigoComentarios',
            through: {
                model: models.Comentario,
                unique: false
            }
        });
        artigo.hasMany(models.Comentario,{            
            as: 'artigoComentario',
            foreignKey: 'fk_artigo',
            targetKey: 'id_artigo'});
        artigo.belongsToMany(models.Categoria,{
            foreignKey:'fk_artigo',
            as: 'artigoCategorias',
            through: models.Artigo_Categoria
        });
        
               
    }
    return artigo
}

module.exports = Artigo;