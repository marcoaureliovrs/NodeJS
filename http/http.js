/* Exemplo http em node.js 
URL de testes: http://localhost:3000

Esse exemplo consiste na chamada da biblioteca http, a criação do servidor esperando requisições 
e respostas entregando ao usuário a mensagem Hello World  em caso de 200.

*/
var http =require('http');

var server=http.createServer(function(request,response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World!</h1>");
	response.end();
});



/*server.listen(3000);*/


server.listen(3000, function() {
	console.log('Servidor está rodando!');
});


