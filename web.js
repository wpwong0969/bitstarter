var fs= require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var readfile = fs.readFileSync("index.html");

var buf = new Buffer(256, "utf-8");

var resp = buf.toString("utf-8",0,40);

app.get('/', function(request, response) {
  response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
