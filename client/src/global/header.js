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
            isConnected: false,
        };

        socket = socketIOClient(this.state.endpoint);
        console.log(socket);
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
            </nav>
        </header>
        );
    }
}


export { Header, socket};





