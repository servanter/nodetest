var Sequelize = require('sequelize');
var sequelize = require('./seq');

var User = sequelize.define('sequelize_usereeccr', {
  user_name: Sequelize.STRING,
  pass_word: Sequelize.STRING,
})

module.exports = User