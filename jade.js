const express = require("express");
const path = require("path");
var port = process.argv[2];
var indexJade = process.argv[3];
var app = express();

app.set("views", indexJade||path.join(__dirname, "templates"));
app.set("view engine", "jade");

app.get("/home", function(req, res) {
  res.render("index", {date: new Date().toDateString()});
});

app.listen(port);
