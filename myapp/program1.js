

var resultado = 0;
for(var arg = 2 ; arg < process.argv.length; arg++){

	resultado = resultado + Number(process.argv[arg]);
}
console.log(resultado);