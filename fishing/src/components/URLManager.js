const BASE_URL = "http://192.168.68.129:5000"
const BASE_URL_PAGE = "http://192.168.68.129:3000"
const API = "/api"

//Format endpoints = BASE_URL + API(versions for later) + route
//*****************************************************************//
//************************PLEASE NOTE******************************//
//*****any route or content related to api will start woth '/'*****//
//********************DO NOT MISS THIS*****************************//
//*****************************************************************//


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

function addEmployeePage() : string {
	return BASE_URL_PAGE + "/add-employee"
}

module.exports = {
	employeeDetailsURL : employeeDetailsURL,
	staticTestURL : staticTestURL,
	addEmployeeURL : addEmployeeURL,
	getPhishingReportURL : getPhishingReportURL,
	addEmployeePage : addEmployeePage
}