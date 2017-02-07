"use strict"

var express = require('express');

var app = express();

var port = process.env.port || 3000;

app.get('/', function(req, res){
    res.send("<h1>Hello World</h1>");
});

app.listen(port, function(){
    console.log("Running on PORT: " + port);
});