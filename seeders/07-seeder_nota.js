'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('notas', [{
        fk_usuario: 1,
        fk_artigo: 2,
        nota: 8.5
      },
      {
        fk_usuario: 2,
        fk_artigo: 2,
        nota: 4.5
      },
      {
        fk_usuario: 3,
        fk_artigo: 1,
        nota: 7.3
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('notas', null, {});
  }
};
