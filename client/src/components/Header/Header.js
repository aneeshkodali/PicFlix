import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import socketIOClient from "socket.io-client";
import "./Header.css";

// The Header creates links that can be used to navigate
// between routes.
var socket;

class Header extends Component{

    constructor(){
        super();
        this.state = {
            endpoint: "http://localhost:5000",
            username: "",
            score: "",
            roomname: "",
            isConnected: false,
            isHost: false,
            playerList: [],
        };

        // connect our client-side socket to server
        socket = socketIOClient(this.state.endpoint);

        // socket server sends back 'lobby created'
        // setup some protorype code
        socket.on('lobby created', (data) => {   

            // apply some states to the socket itself
            socket.roomname = data.roomId;
            socket.username = data.username; 
            socket.isHost = true;

            // apply states   
            this.setState({'username': data.username});
            this.setState({'roomname': data.roomId});
            this.setState({'isHost': true});
            
            // update component
            this.forceUpdate();
        });

        // called when client sends request join and server respones with yes
        // so, store some state date on socket/component. (only way I know how to do this) -- Jordan C
        socket.on('joined game', (data) => {

            // apply some states to the socket itself
            socket.roomname = data.roomId;
            socket.username = data.username; 

            // apply states   
            this.setState({'username': data.username});
            this.setState({'roomname': data.roomId});

            // update component
            this.forceUpdate();
        });

    }

 
    render()
    {
        return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-1">
                <a className="navbar-brand" href="#">PicFlix</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/create-room">
                                Create Room
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"exact to="/join-room">
                                Join Room
                            </NavLink>
                        </li>
                    </ul>

                </div>
                <p>{this.state.username} {this.state.isConnected} {this.state.score} {this.state.roomname}</p>
            </nav>
            </header>
        );
    }
}


export { Header, socket};





