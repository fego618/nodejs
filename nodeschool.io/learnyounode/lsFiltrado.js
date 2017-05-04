var fs = require('fs');
var path = require('path');

dir = process.argv[2];
ext ="."+process.argv[3];

fs.readdir(dir,function(err,files){
  if(err) return console.log(err);
  files.forEach(function(file){
    if(path.extname(file) == ext){
      console.log(file);
    }
  })
});
