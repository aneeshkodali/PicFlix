
import React, { Component } from "react";
import { socket }  from '../Header/Header'

import Swal from 'sweetalert2';

class JoinRoom extends Component{
    constructor() {
        super();
        this.state = {
            username: '',
            roomid: '',
        }

        
        this.joinRoom = ev => {
            ev.preventDefault();
            console.log("joining lobby", this.state.username, this.state.roomid)
            socket.emit("join lobby", {username: this.state.username, roomid: this.state.roomid});
        };
    }



    render(){
        return(
            <div className="container">
                <h1 className="text-center">Join a Game</h1>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form>
                            <label>What's your nickname?</label>
                            <input value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} type="text"className="form-control" placeholder="Johnny Appleseed"/>
                            <label>Room ID</label>
                            <input value={this.state.roomid} onChange={ev => this.setState({roomid: ev.target.value})} type="text" className="form-control" placeholder="3AD13-ZAD12-73AS1"/>
                        </form>
                        <button type="button" className="btn btn-primary mt-1" onClick={this.joinRoom}>Join Game</button>
                        <button type="button" className="btn btn-secondary ml-1 mt-1">Help Guide</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default JoinRoom;