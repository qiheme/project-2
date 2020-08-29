"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("users", "city", {
      type: Sequelize.STRING,
      allowNull: false
    });
    queryInterface.addColumn("users", "state", {
      type: Sequelize.STRING,
      allowNull: false
    });
    queryInterface.addColumn("users", "zip", {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: async queryInterface => {
    queryInterface.removeColumn("Users", "city");
    queryInterface.removeColumn("Users", "state");
    queryInterface.removeColumn("Users", "zip");
  }
};
