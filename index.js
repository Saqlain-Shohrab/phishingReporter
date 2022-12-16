var express = require("express")
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser')

var app = express();
var xml = require('xml')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(fileUpload());

var cors = require('cors');
var router = express.Router();
var jsonParser = bodyParser.json();


const dboperations = require('./dboperations')

app.use(cors());
app.use("/api",router);

router.use((request, response, next) => {
	//console.log('middleware');
	next();
});

router.route('/addEmailTemp', jsonParser).post((request, response) => {
	
	let body = request.body;
	dboperations.addEmailTemplate(1, body.business_name, body.contact_no).then(result => {
		response.json(result);
	})
	
});

router.route('/getEmailTemp').get((request, response) => {
	
	dboperations.addEmailTemplate(1, body.business_name, body.contact_no)
	.then(result => {
		response.json(result);
	})
	
});

router.route('/getStaticReply').get((request, response) => {
	
	const myList = '[{"id": 1,"name": "Saqlain"},{"id": 1,"name": "Touseef"},{"id": 1,"name": "Vinay"},{"id": 1,"name": "Anant"},{"id": 1,"name": "Haseeb"}]'
	response.json(JSON.parse(myList));
	
});

//Get deatails of Employees
router.route('/getEmployees').get((request, response) => {
	
	dboperations.getEmployeeDetails()
	.then(result => {
		response.json(result);
	})
	
});


//Get phishing report
router.route('/getPhishingReport').get((request, response) => {
	
	dboperations.getPhishingReport()
	.then(result => {
		response.json(result);
	})
	
});

//Add Employee
router.route('/addEmployee').post((request, response) => {
	
	let body = request.body;
	
	console.log(body)
	
	dboperations.addEmployee(1, body.name, body.email, body.mob)
	.then(result => {
		response.json(result);
	})
	
});

//Get email template
router.route('/getEmailTemplate').get((request, response) => {
	
	let body = request.body;
	
	console.log(body)
	
	dboperations.getEmailTemplate()
	.then(result => {
		response.json(result);
	})
	
});

app.listen(process.env.PORT || 5000, () => {
	console.log
})