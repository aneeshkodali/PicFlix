var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const uuid = require('uuid');
var port = process.env.PORT || 5000;

var lobby_manager = require("./classes/lobby_manager.js");


server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));



var lobbies = [];

// when socket connection is created
io.on('connection', (socket) => {

    console.log('a user connected', socket.id);

    // attempt to join a lobby
    socket.on('join lobby', (data) => {
        socket.join(data.roomid)
        io.to(data.roomid).emit('player chat', {message: "it works"});
    });

    // attempt to create a lobby
    socket.on('create lobby', (data) => {
        console.log(data);
        const lobby = {
            id: uuid.v1(), // give this lobby a unique id
            name: data.roomname, // pretty name = playername + lobby
            sockets: [] // init a empty socket array for other plays (and host)
        };

        // store the lobby in mem
        lobbies[lobby.id] = lobby;
        
        // create the actual socket and connect to it
        lobby_manager.createLobby(socket, lobby);

        console.log('Created a new lobby [' + lobby.name + ']' + '[' + lobby.id +']');
    });
    
    // player chat
    socket.on("chat message", (data) => {
        console.log('got data', data);
        io.to(data.roomid).emit("chat message receive", {message: data.message, author: data.author});
    });

    // player left lobby
    socket.on('player left', (data) => {
    });

    // player joined lobby
    socket.on('player join', (data) => {
    });

    socket.on('disconnect', (data) => {
    });

});
