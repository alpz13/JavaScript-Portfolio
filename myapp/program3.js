
var fs = require('fs');
var buffer;
//'C:\eula.1028.txt'
//process.argv[2]
fs.readFile(process.argv[2],function callback(err,data){
	if(err){
		console.log(err);
	}

	var str = data.toString().split("\n");
	var contador = 0;
	for( var i = 0 ; i < str.length; i++){
		contador = contador + 1;
	}
	console.log(contador - 1);

});

	
	