var mysql = require('mysql');
var express = require('express');
var app = express();

var dbOption={
        host: '127.0.0.1',  
        port: 3306,  
        user: 'root',  
        password: '123456', 
        database: 'listen'  
 }
app.set('views', __dirname + "/view");
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
	var client = mysql.createConnection(dbOption);
	client.query('SELECT * FROM user', function(err, results, fields) {
		res.render('list', {data:results});
	})
});

app.listen(8888);
console.log('server start at port 8888');