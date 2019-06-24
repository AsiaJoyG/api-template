const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("ingredients", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  

});
