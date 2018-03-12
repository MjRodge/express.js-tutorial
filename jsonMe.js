const express = require("express");
const fs = require("fs");
var port = process.argv[2];
var fileName = process.argv[3];
var app = express();

app.get("/books", function(req, res) {
  fs.readFile(fileName, function(err, data) {
    if (err) {
      return console.log(err);
    }
    var json = JSON.parse(data);
    res.send(json);
  });
});

app.listen(port);
