const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("node_complete", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
