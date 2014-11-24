//required libraries
var userModel = require('../models/user');

var usersController = (function(){
	//----------------
	// Private members
	//----------------
	function login(req, resp){

	};

	function createUser(req, resp){
		//Object that will be sended to the ACS services
		var data = {
			email: req.body.email,
			first_name: req.body.first,
			last_name: req.body.last,
			password: req.body.password,
			password_confirmation: req.body.password,
		};
		
		userModel.createUser(data, function(acsResponse){
			resp.json(acsResponse);
		});
	};


	//----------------
	// Public API
	//----------------
	return {
		createUser : createUser,
		login : login,
	};
})();
module.exports = usersController;