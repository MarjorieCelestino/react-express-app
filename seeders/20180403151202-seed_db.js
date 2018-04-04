//Test: initial information added to database
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        name: "Maria",
        email: "maria@gmail.com",
        password: "123456",
        date_added: "2018-04-03",
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
      },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {
        email: "maria@gmail.com"
      });
  }
};
