'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('artigos_categorias',
      {
        fk_artigo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'categorias',
            key: 'id_categoria'
          },
          onDelete: 'RESTRICT'
        },
        fk_categoria: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'categorias',
            key: 'id_categoria'
          },
          onDelete: 'RESTRICT'
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('artigos_categorias');

  }
};
