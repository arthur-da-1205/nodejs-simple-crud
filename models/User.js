const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../utils/db");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.toString,
    allowNull: false,
  },
  email: Sequelize.STRING,
});

module.exports = User;
