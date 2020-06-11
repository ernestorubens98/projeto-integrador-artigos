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
        },
        createdAt: {
          type: Sequelize.DATE,
          // allowNull: false,
          // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('artigos');
  }
};
