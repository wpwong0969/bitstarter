var fs= require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(256);

var readfile = fs.readFileSync("index.html");

#var buf = fs.readFileSync("index.html");

var resp = buf.toString();

app.get('/', function(request, response) {
  response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
