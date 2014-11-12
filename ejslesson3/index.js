var express = require('express');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('page', {supplies:['Tom', 'Jack']});	
});

app.listen(8888);
console.log('start port 8888');