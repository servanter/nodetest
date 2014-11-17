var Sequelize = require('sequelize');
var sequelize = new Sequelize('listen', 'root', '123456', {
    dialect:'mysql',
    port:3306
})

var User = sequelize.define('User',{
    user_name:Sequelize.STRING,
    pass_word:Sequelize.STRING
}, {
    tableName:'table_user_seq',
    timestamps:false
});

sequelize.sync({focus:true}).success(function(){
    console.log('create table success');
})



var user = User.build({
    user_name:'asdadassad',
    pass_word:'12345'
});


user.save().complete(function(err){
    if(err) {
        throw err;
    } else {
        console.log('insert success');
    }
});


User.create({
    user_name:"asdadasd",
    pass_word:"12321414"
}).complete(function(err, user) {
    console.log(user);
});

console.log('------------------query-----------------');

User.findAndCountAll().complete(function(err, result) {
    if(err) {
        throw err;
    } else {
        console.log(result.rows);
    }
})
