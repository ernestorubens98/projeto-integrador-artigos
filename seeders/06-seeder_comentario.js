'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('comentarios', [{
        texto_comentario: 'Artigo muito bom!!',
        fk_usuario: 1,
        fk_artigo: 1,
        data: '2020-05-19'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('comentarios', null, {});
  }
};
