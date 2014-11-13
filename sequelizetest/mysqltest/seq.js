var Sequelize = require('sequelize')
  , sequelize = new Sequelize('listen', 'root', '123456', {
  	dialect:"mysql",
  	port:3306
  })
 
 module.exports = sequelize;