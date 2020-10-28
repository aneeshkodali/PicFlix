import React, { Component } from "react";
import { socket } from '../Header/Header'


class CreateRoom extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            roomname: "a fun game!",
        }
        
    }


    // Submit changes -> create a room
    onSubmit()
    {

        if (this.state.roomname !== "" && this.state.username !== "")
        {
            socket.emit('create lobby', {username: this.state.username, roomname: this.roomname});
        }
        else
        {
            console.log("no username or roomname.")
        }
    }

    render(){
        return(
            <div className="container">
                <h1 className="text-center">Create a Game</h1>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form>
                            <label>What's your nickname?</label>
                            <input type="text" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control" placeholder="Johnny Appleseed"/>
                            <label>Name of your room?</label>
                            <input type="text" value={this.state.roomname} onChange={ev => this.setState({roomname: ev.target.value})} className="form-control" placeholder={this.state.roomname}/>
                        </form>
                        <button type="button" className="btn btn-primary mt-1" onClick={() => this.onSubmit()}>Create Room</button>
                        <button type="button" className="btn btn-secondary ml-1 mt-1">Help Guide</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default CreateRoom;