'use strict'

const db = require('./database')

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
const Recipes = require('./models/Recipes')
const Ingredients = require('./models/Ingredients')
const Cookbook = require('./models/Cookbook');

Ingredients.belongsToMany(Recipes, {through: 'cookbook'})
Recipes.belongsToMany(Ingredients, {through: 'cookbook'})
// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)

module.exports = {
  // Include your models in this exports object as well!
  db
}
