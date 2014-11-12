exports.User = function(name) {
	var pri = {name:"", pass:""};
	pri.name = name;
	var pub = {
		setName: function(name) {
			pri.name = name;
		},
		getName: function() {
			return pri.name;
		}
	}
	return pub;
}