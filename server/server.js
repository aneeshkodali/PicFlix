var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 5000;


server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// when socket connection is created
io.on('connection', (socket) => {

    // attempt to join a lobby
    socket.on('join lobby', (data) => {
    });

    // attempt to create a lobby
    socket.on('create lobby', (data) => {
    });

    // player left lobby
    socket.on('player left', (data) => {
    });

    // player joined lobby
    socket.on('player join', (data) => {
    });

});
