"use strict"

var express = require('express');

var app = express();

var http = require('http').Server(app);
var socketio = require('socket.io')(http);

var port = process.env.port || 3000;

app.use(express.static(__dirname + "/../Client"));
app.use(express.static(__dirname + "/../node_modules"));

socketio.on('connection', function(socket){
    console.log("A user connected.");

    socket.on('message', function(message){
        //console.log(message);
        socketio.emit('message', message);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(port, function(){
    console.log("Running on PORT: " + port);
});