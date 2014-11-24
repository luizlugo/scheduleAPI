//core.js

//BASE SETUP
//==========================================================

//call the package we need
var express = require('express'),
	app 	= express(),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080,
	usersController = require('./controllers/users'),
	ACS = require('acs-node'),
	acsKey = 'rzzoCnPCtudA9srw80a3YGVCVop4F1gh';

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

//setting the Appcelerator cloud service key
ACS.init(acsKey);

//ROUTES FOR OUR API
//==========================================================
var router = express.Router();  //get an instance of the express router

// Middleware to use for all requests
//=================Users=========================
router.route('/Users')
.post(usersController.createUser);
//.put(studentsController.updateStudent);

/*router.route('/Users/:userId')
.get(studentsController.getStudent)
.delete(studentsController.deleteStudent);*/
	
router.route('/Users/login')
.post(usersController.login);

//Register our routes
app.use('/API', router);

//START THE SERVER
//==========================================================
app.listen(port);
console.log('port: ', port);