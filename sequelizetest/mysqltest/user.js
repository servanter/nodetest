var Sequelize = require('sequelize');
var sequelize = require('./seq');

var User = sequelize.define('User', {
  user_name: Sequelize.STRING,
  pass_word: Sequelize.STRING,
},  {
  tableName: 'my_table',
  timestamps:false
})

module.exports = User
