'use strict';
const faker = require('faker');
const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     var articlesToAdd = [];
     for(let i=0; i<20; i++){
       let randomData = {
           title: faker.lorem.slug(),
           content: faker.lorem.paragraphs(10),
           published: false,
           createdAt: faker.date.between(2000,2021),
           updatedAt: faker.date.recent(),
           UserId:User.id
                      
         };
         articlesToAdd.push(randomData);
     }
      await queryInterface.bulkInsert('Articles', articlesToAdd, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
