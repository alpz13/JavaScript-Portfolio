var http = require('http');
var url = process.argv.slice(2);
var results= [];

for( var i = 0; i < url.length; i++){
	results[i] = null;
}

for(i = 0; i < url.length; i++){
	(function(i){
		http.get(url[i], function(request){
			var result = "";
			request.setEncoding("utf8");
			request.on("data",function(data){
				result += data;
			});
			request.on("end",function(){
				results[i] = result;
				var resultCount = 0;
				for(j = 0; j < results.length; j++){
					if(results[j] != null){
						resultCount++;
					}
				}
				if(resultCount == results.length){
					for(j = 0; j < results.length; j++){
						console.log(results[j]);
					}
				}
			});

		});
	})(i);
}

