module.exports = function() {
	console.log("modulo esta sendo carregado");
	var app = require('express')();
	app.set('view engine','ejs'); //set é utilizando sempre que quisermos definir variáveis no express que passem por todo sistema
	//ejs (Embeded JavaScript)
	app.set('views', './app/views')
	return app;
}
