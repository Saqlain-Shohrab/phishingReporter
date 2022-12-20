const config = {
	//server : 'Saqlainzd-Win\SQLSERVER123',
	server : '169.254.49.27',
	//server : 'MSSQL$SQLSERVER123',
	database : 'Master_db',
	options : {
		trustedconnection : true,
		trustServerCertificate: true
	},
	authentication: {
      type: "default",
      options: {  
        userName: "saqlain-all",
        password: "12345",
      }
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