'use strict';

const { faker } = require("@faker-js/faker");
const uuid4 = require("uuid4");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    faker.seed(12312332);
    let dataItems = [];
    for (let i = 0; i <= 20; i++) {
      let id = uuid4();
      dataItems.push({
        id: id,
        name: faker.commerce.product(),
        price: 999998,
        description: faker.word.adjective(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("items", dataItems, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('items', null, {});
  }
};
