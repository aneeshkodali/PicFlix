import React, { Component } from "react";

const PlayerList = ({playerList}) => {

    var players = ['Player 1','Player 2', 'Player 3'];

    const listPlayers = players.map((number) =>    
        <li>{number} <span class="badge badge-pill badge-primary"> 0 </span></li>  
    );

    return(
        <div>
            {listPlayers}
        </div>
    )
};

export default PlayerList;