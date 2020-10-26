


module.exports.createLobby = function(socket, room)
{
  // add the socket to the Array of sockets
  room.sockets.push(socket);
  console.log(room.id)
  
  // force the socket to join the 'room'
  socket.join(room.id, () => {
    console.log(socket.rooms)
    
    // no need to broadcast; just emit it to this single socket.
    socket.emit('lobby created', {message: 'Successfully created your lobby!', roomId: room.id, roomname: room.name});
  });

  
};