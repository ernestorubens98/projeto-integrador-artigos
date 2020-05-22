const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);
const { sequelize, Artigo, Categoria, Nota, Usuario, Comentario } = require('../models');

const query = `
  SELECT
    artigos.id_artigo AS "artigos.id_artigo",
    Notas.fk_artigo AS "Notas.fk_artigo"
  FROM 
    artigos
  LEFT JOIN
    (SELECT * FROM notas) AS Notas
  ON
    artigos.id_artigo = Notas.fk_artigo
`;

const options = {
  model: Artigo,
  mapToModel: true,
  nest: true,
  raw: true,
  type: sequelize.QueryTypes.SELECT
};

dbConn.query(query, options)
    .then(
        data => {
            console.log(data);
            dbConn.close();
        }
    );