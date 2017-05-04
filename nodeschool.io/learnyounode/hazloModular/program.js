var lsFiltrado = require("./modulo.js");

dir = process.argv[2];
ext =process.argv[3];

lsFiltrado(dir,ext,function(err,data){
  if(err){
    return console.log(err);
  }
  data.forEach(function(file){
    console.log(file);
  });
  //manejo el data que es lo que me va devolver el modulo
});
