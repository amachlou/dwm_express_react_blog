'use strict';

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
     await queryInterface.bulkInsert('Users', [{
      username: 'John',
      email: 'john@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'abdo',
      email: 'abdo@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'jihane',
      email: 'jihane@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'aziz',
      email: 'aziz@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'youssef',
      email: 'youssef@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'hassan',
      email: 'hassan@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'mohammed',
      email: 'mohammed@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'hassna',
      email: 'hassna@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'meryem',
      email: 'meryem@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'hafid',
      email: 'hafid@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'casey',
      email: 'casey@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'yura',
      email: 'yura@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'huan',
      email: 'huan@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'candice',
      email: 'candice@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'maria',
      email: 'maria@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'sarah',
      email: 'sarah@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'cecilia',
      email: 'cecilia@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'jack',
      email: 'jack@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'norman',
      email: 'norman@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      username: 'choun',
      email: 'choun@dwm.ma',
      password: '123456',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
     }], {});

     
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