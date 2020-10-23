


module.exports.createLobby = function(socket, room)
{
  // add the socket to the Array of sockets
  room.sockets.push(socket);
  console.log(room.id)
  
  // force the socket to join the 'room'
  socket.join(room.id, () => {
    socket.roomId = room.id;
  });
  // no need to broadcast; just emit it to this single socket.
  socket.emit('lobby created', {message: 'Successfully created your lobby!', roomId: room.id});
};

module.exports.leaveLobby = function(socket, room)
{

};

module.exports.sendMessage = function(socket, room, message)
{

}