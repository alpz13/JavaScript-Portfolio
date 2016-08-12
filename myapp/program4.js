var fs = require('fs');
var regex = new RegExp('\\.' + process.argv[3] + '$');

fs.readdir(process.argv[2],function callback(err,list){
	if(err){
		console.log(err);
	}
  list.forEach( function (file) {
    if (regex.test(file))
      console.log(file)
  })
})