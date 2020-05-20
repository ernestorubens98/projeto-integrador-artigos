'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comentarios',
      {
        id_comentario: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: "unique_tag"
        },        
        fk_usuario: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'id_usuario'
          },
          unique: "unique_tag"
        },
        fk_artigo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'artigos',
            key: 'id_artigo'
          },
          unique: "unique_tag"
        },
        texto_comentario: {
          type: Sequelize.STRING,
          allowNull: false
        },
        data: {
          type: Sequelize.DATE,
        }
      },

      {
        uniqueKeys: {
          unique_tag: {
            customIndex: true,
            fields: ['id_comentario','fk_usuario','fk_artigo']
          }
        }
      }

      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comentarios');
  }
};
