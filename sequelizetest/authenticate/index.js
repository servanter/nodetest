var Sequelize = require('sequelize');
var sequelize = new Sequelize('listen', 'root', '123456', {
	dialect:"mysql",
	port:3306
});
sequelize.authenticate().complete(function(err) {
	if(err) {
		throw err;
	} else {
		console.log('success');
	}
})
