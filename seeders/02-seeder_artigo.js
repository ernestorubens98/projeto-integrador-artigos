'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('artigos', [{
        titulo: 'A volta dos que não foram',
        resumo: 'Foram e não voltaram',
        arquivo_artigo: '/documentos/artigos'
      },
      {
        titulo: 'artigo de matematica',
        resumo: 'trinta e tres mais cinco é noventa',
        arquivo_artigo: '/documentos/artigos'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('artigos', null, {});

  }
};
