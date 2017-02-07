"use strict"

var express = require('express');

var app = express();

var port = process.env.port || 3000;

app.use(express.static(__dirname + "/../Client"));

app.listen(port, function(){
    console.log("Running on PORT: " + port);
});