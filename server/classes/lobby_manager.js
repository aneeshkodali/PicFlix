


module.exports.joinLobby = function(socket, room)
{
  room.sockets.push(socket);
  socket.join(room.id, () => {
    socket.roomId = room.id;
  });
  socket.emit('lobby created', {message: 'Successfully created your lobby!'});
};