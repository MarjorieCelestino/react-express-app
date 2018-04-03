//Test: initial information added to database
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('User', [{
        name: "Rick",
        email: "rick@gmail.com",
        password: "123456",
        date_added: "2018-04-03",
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
      },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {
        email: "rick@gmail.com"
      });
  }
};
