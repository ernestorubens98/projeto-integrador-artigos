'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('artigos', [{
        titulo: 'A volta dos que não foram',
        resumo: 'Foram e não voltaram',
        arquivo_artigo: '/documentos/artigos'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('artigos', null, {});

  }
};
