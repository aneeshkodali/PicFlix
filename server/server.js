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
        // check if roomid was passed up
        console.log(data)
        if (data.roomid)
        {
            // make sure lobby exists in memory
            if(lobbies[data.roomid])
            {
                console.log('lobby exists -> joining lobby')
                socket.join(data.roomid)
                socket.emit('joined game', {username: data.username, roomId: data.roomid});
                io.to(data.roomid).emit('player join', {username: data.username});
            }
        }

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
        lobby_manager.createLobby(socket, lobby, data.username);

        console.log('Created a new lobby [' + lobby.name + ']' + '[' + lobby.id +']');
    });

    // lobby host requests image add
    // network that image to all lobby players
    // TODO: add security: make sure socket is host, make sure requesting socket belongs to roomid
    socket.on('add image', (data) => {
        if (data.imageData)
        {
            // broadcast the images
            io.to(data.roomid).emit('image added', {image: data.imageData});
            console.log('sent a new image to lobby: ' + data.roomid);
        }
    });

    // lobby host requests image removal
    // network image-removal to all lobby players
    // TODO: add security: make sure socket is host, make sure requesting socket belongs to roomid
    socket.on('remove image', (data) => {
        console.log(data)
        if (data.imageData)
        {
            if (data.roomid)
            {
                io.to(data.roomid).emit('image removed', {image: data.imageData});
                console.log('removed a image from lobby ' + data.roomid)
            }
        }
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
