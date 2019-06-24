const {db} = require('./server/db')
const {green, red} = require('chalk')

const Recipe = require('./server/db/models/Recipes');
const Ingredient = require('./server/db/models/Ingredients');
const Cookbook = require('./server/db/models/Cookbook');

// here's some sample candies to get you started
// feel free to edit these or add your own!
const recipes = [{
  name: 'Rice Pudding',
  description: 'Dessert Rice',

}, {
  name: 'Apple Pie',
  description: 'Even sweeter apples!',

}, {
  name: 'Corn Bread',
  description: 'corn you can make a sandwich with',

}];




const ingredients = [{
  name: 'Apple',


}, {
  name: 'Corn',


}, {
  name: 'Rice',


},{
  name: 'Sugar'
}];

const contents = [{
  recipeId: 1,
  ingredientId: 3

}, {
  recipeId: 1,
  ingredientId: 4


}, {
  recipeId: 2,
  ingredientId: 1


}, {
  recipeId: 2,
  ingredientId: 4


}, {
  recipeId: 3,
  ingredientId: 2


}];

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(recipes.map(recipe => {
      return Recipe.create(recipe);
    }));
    await Promise.all(ingredients.map(ing => {
      return Ingredient.create(ing);
    }));
    await Promise.all(contents.map( content => {
      return Cookbook.create(content);
    }));

    console.log(green('Seeding success!'))
    db.close()
  }
  catch (err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  }
}

seed();
