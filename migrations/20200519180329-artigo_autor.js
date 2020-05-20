'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('artigos_autores',
      {
        id_art_autor: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        fk_artigo: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        fk_usuario: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: true,
          references: {
            model: 'usuarios',
            key: 'id_usuario'
          }
        },
        link: {
          type: Sequelize.STRING,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('artigos_autores');
  }
};
