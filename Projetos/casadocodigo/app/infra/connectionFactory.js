var mysql = require('mysql');

//Função anônima de conexão com o MySQL	
var connection = function(){
	console.log('agora sim, estou conectando no mysql');
	/*return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'casadocodigo'
	});*/
	return mysql.createConnection({
			host: '192.168.99.100',
			user: 'root',
			password: 'Maltx26792mavrs',
			database: 'casadocodigo'
});
	
}

//wrapper
module.exports = function() {
	console.log('Conexão foi chamada');
	return connection;
}
		
