import React from "react";
import {socket, playerList} from './Header/Header';


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

        socket.on('player leave', (data) => {
            this.removePlayer(data.socketId)
        });

        socket.on('player joined', (data) => {
            this.addPlayer(data.socketId, data.username);
        });


        this.state.players = playerList;
    }

    // add a player key: socketid, value: username
    addPlayer(socketid, username)
    {
        var new_players = playerList;

        // add player
        new_players.push({username: username, socketid: socketid});
        
        
        // set state
        this.setState({players: new_players});
    }

    // remove a player by socketid
    removePlayer(socketid)
    {
        var new_players = playerList;

        if (new_players && new_players[socketid])
        {
            // remove player
            delete new_players[socketid]
            
            playerList = new_players;
            // set state
            this.setState({players: new_players})
        }
    }


    render()
    {
        
        var x;
        for(x of this.state.players)
        {
            console.log(x.username);
        }

        return(
            <div>
                {this.state.players.map(userObject => {
                    return(
                        <li key={userObject.socketid}>{userObject.username} <span className="badge badge-pill badge-primary"> 0 </span></li>  
                    );
                })
                }
            </div>
        )
    }
}

export default PlayerList;