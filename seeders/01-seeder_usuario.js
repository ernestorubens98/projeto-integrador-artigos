'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('usuarios', [{
        nome: 'John Doe',
        email: 'teste@teste.com',
        senha: '123456',
        area_atuacao: 'Sei la',
        perfil_usuario: 'davi@davi.com-DaviRed.jpg',
        is_admin: false,
      },
      {
        nome: 'Davi',
        email: 'davi@gmail.com',
        senha: '123456',
        area_atuacao: 'Sei la',
        perfil_usuario: 'ernesto2@teste.comDaviRed.jpg',
        is_admin: true,
      },
      {
        nome: 'Ernesto',
        email: 'teste@gmail.com',
        senha: '123456',
        area_atuacao: 'Sei la',
        perfil_usuario: 'foto-perfil.png',
        is_admin: true,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuarios', null, {});
  }
};
