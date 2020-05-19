'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('notas', [{
        fk_usuario: 1,
        fk_artigo: 1,
        nota: 8.5
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('notas', null, {});
  }
};
