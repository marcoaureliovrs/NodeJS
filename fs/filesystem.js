var arquivo = require('fs');
arquivo.readFile('./arquivos/clubes.txt',function(err, data) {
	if(err) throw err;
		console.log(data.toString());
});

arquivo.writeFile('./arquivos/novo.txt','Criando arquivo com nodejs',[{flag: 'a'}], function(err) {
	if (err)throw err;
	console.log('arquivo criado com sucesso!');
})