

var alex = function (){

	var arreglo = [];
	for(var i=0; i < 20 ; i++){
		if((i % 5 == 0) && (i % 3 == 0)){

			//console.log( "FIZZZ BUZZZ");
			arreglo.push("FIZZZ BUZZZ");

		}
		else if(i % 5 == 0){
			
				//console.log("BUZZ");
				arreglo.push("BUZZ");
			}
		else if(i % 3 == 0){
				
				arreglo.push("FIZZZ");
			//console.log("FIZZZ");

		}
		else{
			//console.log(i);
		}

		
		
	}

	for(var i = 0; i < arreglo.length; i++){

		console.log(arreglo[i]);
		if(arreglo[i] == "FIZZZ"){
			console.log("indice " + i);
		}
	}
}

alex();