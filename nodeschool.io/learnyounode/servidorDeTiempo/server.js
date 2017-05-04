var net = require('net');

var server = net.createServer(function(socket){
  //manejo del socket
  //formato a devolver AAAA-MM-DD hh:mm
  date = new Date();
  ano=date.getFullYear();
  mes=date.getMonth();
  if(mes<10){
    mes+=1;
    mes="0"+mes
  }
  dia=date.getDate();
  if(dia<10) dia = "0"+dia;
  hora=date.getHours();
  if(hora<10) hora = "0"+hora;
  min = date.getMinutes();
  if(min<10) min = "0"+min;
  fecha = ano+"-"+mes+"-"+dia+" "+hora+":"+min+"\n";
  socket.write(fecha);
  socket.end();
});
server.listen(process.argv[2]);
