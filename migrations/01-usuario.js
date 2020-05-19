'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios',
      {
        id_usuario: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false
        },
        area_atuacao: {
          type: Sequelize.STRING,
          allowNull: false
        },
        foto_perfil: {
          type: Sequelize.STRING,
          allowNull: true
        },
        is_admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('usuarios');
  }
};
