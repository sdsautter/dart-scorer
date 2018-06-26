'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      cricket: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      x01: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      legWins: {
        type: Sequelize.INTEGER
      },
      legTotal: {
        type: Sequelize.INTEGER
      },
      setWins: {
        type: Sequelize.INTEGER
      },
      setTotal: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};