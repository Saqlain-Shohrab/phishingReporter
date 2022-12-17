const BASE_URL = "http://54.165.182.92:5000"
const BASE_URL_PAGE = "http://54.165.182.92:3000"
const API = "/api"

//Format endpoints = BASE_URL + API(versions for later) + route
//*****************************************************************//
//************************PLEASE NOTE******************************//
//*****any route or content related to api will start woth '/'*****//
//********************DO NOT MISS THIS*****************************//
//*****************************************************************//


/*ALL API ENDPOINTS*/
function employeeDetailsURL() : string {
	return BASE_URL + API + "/getEmployees"
}

function staticTestURL() : string {
	return BASE_URL + API + "/getStaticReply"
}

function addEmployeeURL() : string {
	return BASE_URL + API + "/addEmployee"
}

function getPhishingReportURL() : string {
	return BASE_URL + API + "/getPhishingReport"
}

function getEmailTemplateURL() : string {
	return BASE_URL + API + "/getEmailTemplate"
}


/*ALL PAGE URLS*/
function addEmployeePage() : string {
	return BASE_URL_PAGE + "/add-employee"
}

function homePage() : string {
	return BASE_URL_PAGE + "/fishing-report"
}

function userDetailsPage() : string {
	return BASE_URL_PAGE + "/user-details"
}

module.exports = {
	employeeDetailsURL : employeeDetailsURL,
	staticTestURL : staticTestURL,
	addEmployeeURL : addEmployeeURL,
	getPhishingReportURL : getPhishingReportURL,
	addEmployeePage : addEmployeePage,
	homePage : homePage,
	userDetailsPage : userDetailsPage,
	getEmailTemplateURL : getEmailTemplateURL
}