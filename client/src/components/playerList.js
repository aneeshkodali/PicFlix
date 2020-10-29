import React from "react";
import {socket} from './Header/Header';



class PlayerList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            players: []
        }

        this.addPlayer = this.addPlayer.bind(this);
        this.removePlayer = this.removePlayer.bind(this);

        socket.on('player leaving', (data) => {
            this.removePlayer(data.socketId)
        });

        socket.on('player joined', (data) => {
            this.addPlayer(data.socketId, data.username);
        });

        socket.on('lobby request', (data) => {
            this.state.players = data.sockets;
            this.forceUpdate();
        });

        socket.emit("request room info", {roomId: socket.roomname});

    }

    // add a player key: socketid, value: username
    addPlayer(socketid, username)
    {
        var new_players = this.state.players;

        // add player
        new_players.push({username: username, socketid: socketid});
        
        // set state
        this.setState({players: new_players});
    }

    // remove a player by socketid
    removePlayer(socketid)
    {
        var new_players = this.state.players

        // filter out the left player
        new_players = new_players.filter(function(el) { return el.socketid != socketid; }); 

        // update the state
        this.setState({players: new_players})
    }



    render()
    {
        return(
            <div>
                {this.state.players.map(userObject => {
                    return(
                        <li key={userObject.username}>{userObject.username} <span className="badge badge-pill badge-primary"> 0 </span></li>  
                    );
                })
                }
            </div>
        )
    }
}

export default PlayerList;