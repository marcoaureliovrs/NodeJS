/*
Utilizando a bibloteca para http para levantar o servidor web(Apache)
 */
var http = require('http');
var server = http.createServer(function(request, response) {
	//Rotas no nodejs
	if(request.url == "/produtos") {
		response.end("<html><body><h1>Listando os Produtos</h1></body></html>");
	} else {
		response.end('<html><body><h1>Home</h1></body></html>')
	}
});
server.listen(3000, "localhost");
console.log("Servidor ta rodando");

