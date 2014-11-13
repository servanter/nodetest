var User = require('./user')
var sequelize = require('./seq');

 
sequelize.sync().success(function() {
   User.create({
    user_name: 'sdepold',
    pass_word: 'sequelize'
  }).success(function(sdepold) {
    console.log(sdepold.values)
  })
})