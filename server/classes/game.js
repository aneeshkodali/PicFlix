
function Game(id, player_host, hostId, name)
{
    this.id = id;
    this.host = player_host;
    this.hostId = hostId;
    this.name = name;
    this.players = [];
};

Game.prototype.addPlayer = function(player)
{
  this.players.push(player);
  console.log("added a player to game lobby" + this.hostId + "[" + player + "]");
};

// Restart the round
Game.prototype.restartRound = function() {};

// Kick a player from the game
Game.prototype.kickPlayer = function() {};

// End the game
Game.prototype.endGame = function() {};

module.exports = Game;