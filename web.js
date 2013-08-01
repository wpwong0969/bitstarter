var fs= require('fs');

var express = require('express');

var app = express.createServer(express.logger());

// var readfile = fs.readFileSync("index.html");

// var buf = new Buffer(256);
var buf = fs.readFileSync("index.html");

// var resp = buf.toString(0,30);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
