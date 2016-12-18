var http = require('http');
var arquivo = require('fs');

//req, res
var server = http.createServer(function(request,response) {

	if (request.url == '/') {
		//__dirname é uma constante.
		arquivo.readFile(__dirname +'/arquivos/index.html', function(err, html) {
		response.writeHead(200, {"Content-Type": "text/html"});
		if (err) response.write('Arquivo index.html não encontrado.'); 
		response.write(html);
		response.end();	
		});

	} else if (request.url == '/contatos') {
		arquivo.readFile(__dirname +'/arquivos/contatos.html', function(err, html) {
		response.writeHead(200, {"Content-Type": "text/html"});
		if (err) response.write('Arquivo contatos.html não encontrado.'); 
		response.write(html);
		response.end();	
		});

	} else {
		response.write('Pagina não encontrada');
	}

	
	});

	


server.listen(3000, function() {
	console.log('Servidor rodando!');
})