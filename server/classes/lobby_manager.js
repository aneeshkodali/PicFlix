


module.exports.createLobby = function(socket, room, usrname)
{
  // add the socket to the Array of sockets
  room.sockets.push(socket);
  
  // force the socket to join the 'room'
  socket.join(room.id, () => {
    
    // no need to broadcast; just emit it to this single socket.
    socket.emit('lobby created', {username: usrname, message: 'Successfully created your lobby!', roomId: room.id, roomname: room.name});
  });

  
};