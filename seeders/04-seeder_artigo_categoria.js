'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('artigos_categorias', [{
        fk_artigo: 1,
        fk_categoria: 2
      },
      {
        fk_artigo: 2,
        fk_categoria: 1
      },
      {
        fk_artigo: 1,
        fk_categoria: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('artigos_categorias', null, {});
  }
};
