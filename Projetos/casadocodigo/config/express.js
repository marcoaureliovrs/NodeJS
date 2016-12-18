var express = require('express');
var load = require('express-load');

module.exports = function() {
	console.log("modulo esta sendo carregado");

	var app = express();
	

	app.set('view engine','ejs'); //set é utilizando sempre que quisermos definir variáveis no express que passem por todo sistema
	//ejs (Embeded JavaScript)
	app.set('views', './app/views');

	load('routes',{cwd:'app'})
		.then('infra')
		.into(app);
	
	return app;
}
