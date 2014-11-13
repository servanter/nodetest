var Sequelize = require('sequelize');
var sequelize = new Sequelize('listen', 'root', '123456', {
	dialect:'mysql',
	port:3306
});

var User = sequelize.define('User', {
	user_name:Sequelize.STRING,
	pass_word:Sequelize.STRING
}, {
	tableName:'user',
	timestamps:false
});


var u = User.build({
	user_name:'woshiyige haoren',
	pass_word:'nine'
});

User.create({
	user_name:'wasdasdasdn',
	pass_word:'nine'
}).complete(function(err, result) {
	console.log(result);
})

u.save().complete(function(err, result) {
	console.log(result);

})

