/* Exemplo http em node.js 
URL de testes: http://localhost:3000
				http://localhost:3000/contato
				http://localhost:3000/teste

Esse exemplo consiste na chamada da biblioteca http, a criação do servidor esperando requisições 
e respostas entregando ao usuário a mensagem Hello World  em caso de 200, após esse processo você irá
colocar qual tipo de URL deseja requisitar como /contatos ou /teste

*/
var http =require('http');

var server=http.createServer(function(request,response) {
	response.writeHead(200, {"Content-Type": "text/html"});

	if (request.url =='/') {
		response.write("<h1>Página Principal</h1>");	
	} else if (request.url =='/contato') {
		response.write("<h1>Página Contatos</h1>");	
	} else if (request.url =='/clientes') {
		response.write("<h1>Página Clientes</h1>");	
	} else if (request.url =='/teste') {
		response.write("<h1>Página Teste</h1>");	
	} else {
		response.write("<h1>Página não encontrada</h1>");	
	}
	
	response.end();
});

/*server.listen(3000);*/

server.listen(3000, function() {
	console.log('Servidor está rodando!');
});


