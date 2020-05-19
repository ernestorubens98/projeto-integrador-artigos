'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('artigos_autores', [{
        fk_artigo: 1,
        fk_usuario: 1,
        is_usuario: true,
        link: 'www.google.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('artigos_autores', null, {});
  }
};
