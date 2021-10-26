var mysql = require('mysql')
export const mysqlDB = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'green37984528!',
	database: 'changmin',
})
// try {

// } catch (ex) {
// 	console.error(ex.toString)
// }
