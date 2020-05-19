'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('usuarios', [{
        nome: 'John Doe',
        email: 'teste@teste.com',
        senha: '123456',
        area_atuacao: 'Sei la',
        is_admin: false,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuarios', null, {});
  }
};
