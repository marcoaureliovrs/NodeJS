/* Exemplo http em node.js 
URL de testes: http://localhost:3000

*/
var http =require('http'); // Módulo de HTTP(Apache)
var arquivo = require('fs'); //Módulo de FileSystem

var server=http.createServer(function(request,response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World!</h1>");
	response.write("<br>");
	response.write("<h3>Aulas NodeJS</h3>");
	//Cria arquivo logs.txt com o resultado da requisição feita no site
	var txt = arquivo.createWriteStream('./arquivos/logs.txt', {flags:'a'}); 
	txt.write(request.url + '\n');
	response.end();
});



/*server.listen(3000);*/


server.listen(3000, function() {
	console.log('Servidor está rodando!');
});

