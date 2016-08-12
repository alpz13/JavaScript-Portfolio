
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
//buffer = fs.readFileSync('C:\eula.1028.txt');
var str = buffer.toString();
var lineas = str.split("\n");
var contador = 0;
for( var i = 0 ; i < lineas.length; i++){
	contador = contador + 1;
}
console.log(contador - 1);
//var algo = str.split("/").map(function (val))