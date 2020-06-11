'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('notas', [{
        fk_usuario: 1,
        fk_artigo: 1,
        nota: 8.5
      },
      {
        fk_usuario: 2,
        fk_artigo: 1,
        nota: 4.4
      },
      {
        fk_usuario: 3,
        fk_artigo: 2,
        nota: 5.5
      },
      {
        fk_usuario: 4,
        fk_artigo: 2,
        nota: 6.6
      },
      {
        fk_usuario: 5,
        fk_artigo: 3,
        nota: 7.7
      },
      {
        fk_usuario: 1,
        fk_artigo: 3,
        nota: 8.8
      },
      {
        fk_usuario: 2,
        fk_artigo: 4,
        nota: 9.9
      },
      {
        fk_usuario: 3,
        fk_artigo: 4,
        nota: 9.9
      },
      {
        fk_usuario: 4,
        fk_artigo: 5,
        nota: 9.9
      },
      {
        fk_usuario: 5,
        fk_artigo: 5,
        nota: 9.9
      },
      {
        fk_usuario: 1,
        fk_artigo: 6,
        nota: 9.9
      },
      {
        fk_usuario: 2,
        fk_artigo: 6,
        nota: 9.9
      },
      {
        fk_usuario: 1,
        fk_artigo: 7,
        nota: 9.9
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('notas', null, {});
  }
};
