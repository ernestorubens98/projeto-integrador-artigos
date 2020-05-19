'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorias', [{
      nome: 'Matematica'
    },
    {
      nome: 'Geografia'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorias', null, {});
  }
};
