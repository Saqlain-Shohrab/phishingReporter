var config = require('./dbconfig');
var sql = require('mssql')

const EMAIL_TEMPLATE_TABLE = 'EmailTemplate';

const staticJSON = require('./StaticJSONResponces')

const staticMode = true;

async function addEmailTemplate(id, business_name, contact_no) {
	try {
		let pool = await sql.connect(config);
		await pool.request("insert into " + EMAIL_TEMPLATE_TABLE + " values (" + id + "," + business_name + "," + contact_no + ")");
		
		return "Added Successfully!!!"
		
	} catch(error) {
		console.log(error);
		return "Something went wrong!!!"
	}
}

async function getEmailTemplate() {
	try {
		let pool = await sql.connect(config);
		await pool.request("select * from " + EMAIL_TEMPLATE_TABLE);
		
		return "Added Successfully!!!"
		
	} catch(error) {
		return "Something went wrong!!!"
	}
}


//Query to get details of all the Employees
async function getEmployeeDetails() {
	
	if (staticMode) {
		return JSON.parse(staticJSON.employeeDetails());
	}
	
	try {
		let pool = await sql.connect(config);
		let data = await pool.request("select * from " + EMAIL_TEMPLATE_TABLE);
		
		return data.recordsets;
		
	} catch(error) {
		return "Something went wrong!!!"
	}
}


async function getPhishingReport() {
	if (staticMode) {
		return JSON.parse(staticJSON.phishingReport());
	}
	
	try {
		let pool = await sql.connect(config);
		let data = await pool.request("select * from " + EMAIL_TEMPLATE_TABLE);
		
		return data.recordsets;
		
	} catch(error) {
		return "Something went wrong!!!"
	}
}

async function addEmployee(id, name, email, contactNo) {
	if (staticMode) {
		
		const txt = '"' + id + ' and ' + name + ' and ' + email + ' and ' + contactNo + '"'
		return JSON.parse('{"data" : ' + txt + '}');
	}
	
	try {
		let pool = await sql.connect(config);
		let data = await pool.request("insert into " + EMAIL_TEMPLATE_TABLE + "values(" + name, email, contactno + ')');
		
		return JSON.parse('{"data" : ' + txt + '}');
		
	} catch(error) {
		return "Something went wrong!!!"
	}
}

module.exports = {
	addEmailTemplate : addEmailTemplate,
	getEmailTemplate : getEmailTemplate,
	getEmployeeDetails : getEmployeeDetails,
	getPhishingReport : getPhishingReport,
	addEmployee : addEmployee
}