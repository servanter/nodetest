function Person() {
	var name = '';
	this.setName = function(pName) {
		name = pName;
	}
	this.say = function(){
		console.log('Hello ' + name);
	}
}
module.exports = Person