/* eslint-disable quotes */
const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("cookbook", {
rating: {
  type: Sequelize.INTEGER
}

});
