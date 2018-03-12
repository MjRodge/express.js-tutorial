const express = require("express");
const path = require("path");
const stylus = require("stylus");
var port = process.argv[2];
var indexHtml = process.argv[3];
var app = express();

app.use(stylus.middleware(__dirname + '/public'));

app.use(express.static(indexHtml||path.join(__dirname, 'public')));
app.listen(port);
