'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comentarios', [{
      texto_comentario: 'Artigo muito bom!!',
      fk_usuario: 1,
      fk_artigo: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      texto_comentario: 'Artigo muito bom!!',
      fk_usuario: 2,
      fk_artigo: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      texto_comentario: 'Artigo meia boca!',
      fk_usuario: 3,
      fk_artigo: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      texto_comentario: 'Artigo Good',
      fk_usuario: 4,
      fk_artigo: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      texto_comentario: 'Artigo Bad',
      fk_usuario: 5,
      fk_artigo: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      texto_comentario: 'Artigo Sad',
      fk_usuario: 5,
      fk_artigo: 6,
      createdAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comentarios', null, {});
  }
};
