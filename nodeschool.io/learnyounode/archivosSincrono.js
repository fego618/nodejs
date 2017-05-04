var fs = require('fs');

buffer = fs.readFileSync(process.argv[2]);
var numLineas = buffer.toString().split("\n").length - 1;
console.log(numLineas);
