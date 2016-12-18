//var connectionFactory = require ('../infra/connectionFactory');
module.exports = function(app){
	//Configurando a primeira rota
	app.get('/produtos', function(req,res) {
		var connection = app.infra.connectionFactory();

		connection.query('select * from livros', function(err, results) {
			res.render('produtos/lista', {lista:results})
		});
		connection.end();
	});
}
