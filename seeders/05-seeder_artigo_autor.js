'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artigos_autores',
      [
        {
          fk_artigo: 1,
          fk_usuario: 1,
          link: null
        },
        {
          fk_artigo: 2,
          fk_usuario: 2,
          link: null
        },
        {
          fk_artigo: 3,
          fk_usuario: 3,
          link: null
        },
        {
          fk_artigo: 4,
          fk_usuario: 4,
          link: null
        },
        {
          fk_artigo: 4,
          fk_usuario: 4,
          link: null
        },
        {
          fk_artigo: 5,
          fk_usuario: 5,
          link: null
        },
        {
          fk_artigo: 6,
          fk_usuario: 6,
          link: null
        },
        {
          fk_artigo: 7,
          fk_usuario: 7,
          link: null
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('artigos_autores', null, {});
  }
};
