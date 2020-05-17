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
        artigo.belongsTo(models.Usuario,{foreignKey:'fk_usuario', as:'usuario'});
        artigo.hasMany(models.Comentario,{foreignKey:'fk_comentario', as:'comentarios'});
    }
    return artigo
}

module.exports = Artigo;