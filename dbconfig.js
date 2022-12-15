const config = {
	user : 'SAQLAINZD-WIN\Saqlain',
	password : '',
	server : 'localhost',
	database : 'EcomDB',
	options : {
		trustedconnection : true,
		trustServerCertificate: true
	},
	port : 1433
}

/*const config = { 
	server: 'localhost', 
	authentication: {
		options: { 
			type: 'default', 
			userName: 'saqlain', 
			password: '12345',
			} 
		},
	options: { 
		trustServerCertificate: true, 
		database: 'database'
		} 
	}*/

module.exports = config;