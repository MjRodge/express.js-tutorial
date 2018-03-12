const express = require("express");
const path = require("path");
var port = process.argv[2];
var indexHtml = process.argv[3];
var app = express();

app.use(express.static(indexHtml||path.join(__dirname, 'public')));
app.listen(port);
