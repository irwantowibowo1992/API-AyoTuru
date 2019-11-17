"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "rooms",
      [
        {
          name: "Kluthuk Spesial",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kluthuk Suite",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kluthuk Super Suite",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Klutuk Very Super Suite",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("rooms", null, {});
  }
};
