'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorias', [{
      nome: 'matemática'
    },
    {
      nome: 'portugues'
    },
    {
      nome: 'história'
    },
    {
      nome: 'filosofia'
    },
    {
      nome: 'biologia'
    },
    {
      nome: 'física'
    },
    {
      nome: 'química'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorias', null, {});
  }
};
