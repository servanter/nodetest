var Sequelize = require('sequelize');
var sequelize = new Sequelize('wechat_shop', 'root', '123456', {
	dialect:'mysql',
	port:3306
});

var Area = sequelize.define('Area', {
    id:Sequelize.BIGINT,
    parent_id:Sequelize.BIGINT,
    area_name:Sequelize.STRING,
    area_ename:Sequelize.STRING,
}, {
    tableName:'weshop_area',
    timestamps:false
});


Area.findAll({where:{parent_id:0}, offset:2, limit:2}).success(function(result) {
	console.log(result);
})