import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import socketIOClient from "socket.io-client";
import "./header.css";

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


            console.log(this.state);
            this.forceUpdate();
        });
    }

    render()
    {
        return(
        <header>
            <nav>
                <ul className="NavClass">
                    <li>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/create-room">
                            Create Room
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/join-room">
                            Join Room
                        </NavLink>
                    </li>
                </ul>

                <p>{this.state.username} {this.state.isConnected} {this.state.score} {this.state.roomname}</p>
                
            </nav>
        </header>
        );
    }
}


export { Header, socket};





