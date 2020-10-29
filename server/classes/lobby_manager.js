


module.exports.createLobby = function(socket, room, usrname)
{


  
  // force the socket to join the 'room'
  socket.join(room.id, () => {
    socket.roomId = room.id;
    socket.username = usrname;

    // add the socket to the Array of sockets
    room.sockets.push(socket);

    // no need to broadcast; just emit it to this single socket.
    socket.emit('lobby created', {username: usrname, message: 'Successfully created your lobby!', roomId: room.id, roomname: room.name});
  });

  
};