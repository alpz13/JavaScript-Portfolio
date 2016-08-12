var fs = require('fs');
var path = require('path');


module.exports = function (directory, extention, callback){
	fs.readdir(directory,function (err,list){
		var arr = [];
		
		if(err){
			callback(err);
		}
		else{
	  	list.forEach(function (file) {
		    if (path.extname(file) === '.' + extention){
		    	arr.push(file);
		    }
	    }
	    
	  	)
	  	callback(null, arr);
	  	}
	})
}


