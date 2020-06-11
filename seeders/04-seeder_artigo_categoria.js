'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('artigos_categorias', [{
        fk_artigo: 1,
        fk_categoria: 1
      },
      {
        fk_artigo: 2,
        fk_categoria: 2
      },
      {
        fk_artigo: 3,
        fk_categoria: 3
      },
      {
        fk_artigo: 4,
        fk_categoria: 4
      },
      {
        fk_artigo: 5,
        fk_categoria: 5
      },
      {
        fk_artigo: 6,
        fk_categoria: 6
      },
      {
        fk_artigo: 7,
        fk_categoria: 7
      },
      {
        fk_artigo: 6,
        fk_categoria: 7
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('artigos_categorias', null, {});
  }
};
