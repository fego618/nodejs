var fs = require('fs');
var path = require('path');

function lsFiltrado(dir,ext,callback){
  ext = "."+ext;
  list = [];
  fs.readdir(dir,function(err,files){
    if(err){
      return callback(err);
    }else {
      files.forEach(function(file){
        if(path.extname(file) == ext){
          list.push(file);
        }
      });
      return callback(null,list);
    }
  });
}

module.exports = lsFiltrado;
