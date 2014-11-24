//required libraries
var ACS = require('acs-node');

var userModel = (function(){
	//----------------
	// Private members
	//----------------
	function createUser(_params, _callback){
		//calling the Appcelerator cloud services
		ACS.Users.create(_params, function(_resp){
			_callback && _callback(_resp);
		});
	};

	//----------------
	// Public API
	//----------------
	return {
		createUser : createUser
	};
})();
module.exports = userModel;