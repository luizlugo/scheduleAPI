//core.js

//BASE SETUP
//==========================================================

//call the package we need
var express = require('express'),
	app 	= express(),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

//ROUTES FOR OUR API
//==========================================================
var router = express.Router();  //get an instance of the express router

// Middleware to use for all requests
//=================STUDENTS=========================
router.route('/students')
.post(studentsController.addStudent)
.put(studentsController.updateStudent);

router.route('/students/:studentId')
.get(studentsController.getStudent)
.delete(studentsController.deleteStudent);

//Register our routes
app.use('/API', router);

//START THE SERVER
//==========================================================
app.listen(port);
console.log('port: ', port);