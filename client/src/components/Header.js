import React, { Component } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
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
        };

        socket = socketIOClient(this.state.endpoint);
        console.log(socket);
    }

    componentDidMount()
    {

        socket.on('lobby created', (data) => {
            console.log('got message', data);
            
            this.state.username = "User 01";
            this.state.roomname = data.roomId;

            socket.roomname = data.roomId;
            socket.username = "User 01";

            this.forceUpdate();
            
        });
    }

    render()
    {
        return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-1">
                <a class="navbar-brand">PicFlix</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
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





