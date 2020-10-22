// a player class
var Player = function(id, name, color, lobby, isHost)
{
    this.isConnected = true;
    this.id = id;
    this.name = name;
    this.lobby = lobby;
    this.isHost = true
};

module.exports = Player