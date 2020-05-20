const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);

dbConn.query("SELECT * FROM review_artigos.artigos INNER JOIN artigos_autores ON artigos.id_artigo = artigos_autores.fk_artigo INNER JOIN usuarios ON artigos_autores.fk_usuario = usuarios.id_usuario GROUP BY id_artigo;", Sequelize.QueryTypes.SELECT)
.then(
    data => {
        console.log(data);
        dbConn.close();
    }
);