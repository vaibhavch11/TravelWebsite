'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
     
      EventId: {
        type: Sequelize.STRING
      },
      Place: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      eventName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) 
  {
    // await queryInterface.dropTable('Users');
  }
};