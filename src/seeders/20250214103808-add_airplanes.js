'use strict';
const { OP } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber:"Airbus 3040",
        capacity : 900
      },
      {
        modelNumber:"Boeing 777",
        capacity : 450,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Airplanes', {[OP.or]: [
        { modelNumber:"Airbus 3040"},
        {modelNumber:"Boeing 777"}
      ]
      });
 
  }
};
