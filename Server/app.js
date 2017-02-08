"use strict"

var express = require('express');

var app = express();

var http = require('http').Server(app);
var socketio = require('socket.io')(http);

var port = process.env.port || 3000;

app.use(express.static(__dirname + "/../Client"));

socketio.on('connection', function(socket){
    console.log("A user connected.");
});

http.listen(port, function(){
    console.log("Running on PORT: " + port);
});