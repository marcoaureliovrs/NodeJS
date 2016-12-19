module.exports = function(app){

	var listaProdutos = function (req,res) {

		//Conexão com o Banco
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		//Execução da query lista da classe produtosBanco.js
		produtosDAO.lista(function(err, results) {
			//Tratando o formato da requisição
			res.format({
				html: function(){
					res.render('produtos/lista', {lista:results});
				},
				json: function(){
					res.json(results);
				}
			});
		});
		connection.end();
	};


	//Configurando a primeira rota
	app.get('/produtos', listaProdutos);

	app.get ('/produtos/form', function (req, res) {
		res.render('produtos/form');
	});

	app.post('/produtos',function(req,res) {

		var produto = req.body;

		var validadorTitulo = req.assert('titulo', 'Titulo é obrigatório');
		validadorTitulo.notEmpty();
		var erros = req.validationErrors();

		if (erros) {
			res.render('produtos/form');
			return;
		}

		console.log(produto);

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto,function(erros,resultado) {
			console.log(erros);
			res.redirect('/produtos');
			
		});
	}); 
}
