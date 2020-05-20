const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);

dbConn.query("SELECT * FROM review_artigos.artigos INNER JOIN artigos_autores ON artigos.id_artigo = artigos_autores.fk_artigo INNER JOIN usuarios ON artigos_autores.fk_usuario = usuarios.id_usuario INNER JOIN artigo_categorias ON artigo_categorias.fk_artigo = usuarios.id_usuario INNER JOIN categorias ON artigo_categorias.fk_categoria = categorias.id_categoria;", Sequelize.QueryTypes.SELECT)
.then(
    data => {
        console.log(data);
        dbConn.close();
    }
);