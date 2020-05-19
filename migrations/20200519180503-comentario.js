'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comentarios',
      {
        id_comentario: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        texto_comentario: {
          type: Sequelize.STRING,
          allowNull: false
        },
        fk_usuario: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'id_usuario'
          }
        },
        fk_artigo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'artigos',
            key: 'id_artigo'
          }
        },
        data: {
          type: Sequelize.DATE,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comentarios');
  }
};
