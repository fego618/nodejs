var http = require('http');
var url = require('url');

function parseTime(time){
  return {"hour":time.getHours(),
          "minute":time.getMinutes(),
          "second":time.getSeconds()
        }
}

function unixTime(time){
  return {"unixtime":time.getTime()}
}

var server = http.createServer(function(req,res){
  if(req.method !== 'GET'){
    return res.end("only GET \n");
  }
  var result;
  //res.writeHead(200,{'Content-Type':'application/json'});
  var jsonUrl = url.parse(req.url,true);
  var time = new Date(jsonUrl.query.iso);

  if("/api/parsetime" == jsonUrl.pathname){
    result = parseTime(time);
  }
  if("/api/unixtime" == jsonUrl.pathname){
    result = unixTime(time);
  }

  if(result){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(result));
  }else {
    res.writeHead(404);
    res.end();
  }

});
server.listen(process.argv[2]);
