'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('artigos',
      {
        id_artigo: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        titulo: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        resumo: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        arquivo_artigo: {
          type: Sequelize.STRING(100),
          allowNull: true
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('artigos');
  }
};
