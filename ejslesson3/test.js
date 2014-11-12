var ejs = require('ejs');
console.log(__dirname);
console.log(ejs);
var supplies = {supplies: ['mop', 'broom', 'duster']};
str = require('fs').readFileSync(__dirname + '/page.ejs', 'utf8');
var data = ejs.render(str, {supplies: ['mop', 'broom', 'duster']});  
console.log(data);
