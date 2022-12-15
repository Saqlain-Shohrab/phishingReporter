

function staticResult() {
	const list = '[{"id": 1,"name": "Saqlain"},{"id": 1,"name": "Touseef"},{"id": 1,"name": "Vinay"},{"id": 1,"name": "Anant"},{"id": 1,"name": "Haseeb"}]'
	return list;
}

function employeeDetails() {
	const list = '[{"id":1,"name":"Saqlain","mob":"+353831391550","email":"saqlain@gmail.com"},{"id":1,"name":"Vinay","mob":"+00000000","email":"vinay@gmail.com"},{"id":1,"name":"Touseef","mob":"+11111111","email":"touseef@gmail.com"},{"id":1,"name":"Anant","mob":"+322222222","email":"anant@gmail.com"},{"id":1,"name":"Haseeb","mob":"+55555565747","email":"haseeb@gmail.com"}]'
	return list;
}

function phishingReport() {
	const list = '[{"id":1,"client":"LIDL","status":1},{"id":1,"client":"Tesco","status":0},{"id":1,"client":"ALDI","status":1},{"id":1,"client":"Super Value","status":0},{"id":1,"client":"Lyca","status":1}]'
	return list;
}

module.exports = {
	staticResult : staticResult,
	employeeDetails : employeeDetails,
	phishingReport : phishingReport
}