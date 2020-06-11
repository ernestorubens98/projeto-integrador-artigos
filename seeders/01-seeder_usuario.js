'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('usuarios', [{
        nome: 'John Doe',
        email: 'john@doe.com',
        senha: '123456',
        area_atuacao: 'Escritor',
        foto_perfil: 'davi@davi.com-DaviRed.jpg',
        is_admin: false,
      },
      {
        nome: 'Davi',
        email: 'davi@gmail.com',
        senha: '123456',
        area_atuacao: 'Programador',
        foto_perfil: 'ernesto2@teste.comDaviRed.jpg',
        is_admin: true,
      },
      {
        nome: 'Ernesto',
        email: 'ernesto@gmail.com',
        senha: '123456',
        area_atuacao: 'Desenvolvedor',
        foto_perfil: 'foto-perfil.png',
        is_admin: true,
      },
      {
        nome: 'Silvania',
        email: 'silvania@gmail.com',
        senha: '123456',
        area_atuacao: 'Desenvolvedora',
        foto_perfil: 'foto-perfil.png',
        is_admin: true,
      },
      {
        nome: 'Ronaldo',
        email: 'ronaldo@gmail.com',
        senha: '123456',
        area_atuacao: 'Desenvolvedor',
        foto_perfil: 'foto-perfil.png',
        is_admin: true,
      },
      {
        nome: 'Naruto',
        email: 'naruto@gmail.com',
        senha: '123456',
        area_atuacao: 'Hokage',
        foto_perfil: 'foto-perfil.png',
        is_admin: false,
      },
      {
        nome: 'Sasuke',
        email: 'sasuke@gmail.com',
        senha: '123456',
        area_atuacao: 'Vingador',
        foto_perfil: 'foto-perfil.png',
        is_admin: false,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuarios', null, {});
  }
};
