const express = require("express");
const bp = require("body-parser");
var port = process.argv[2];
var app = express();

app.use(bp.urlencoded({extended: false}));

app.post("/form", function(req, res) {
  console.log(res.send(req.body.str.split("").reverse().join("")));
});

app.listen(port);
