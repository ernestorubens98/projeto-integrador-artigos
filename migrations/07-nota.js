'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notas',
      {
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
        nota: {
          type: Sequelize.DECIMAL(4, 2),
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('notas');
  }
};
