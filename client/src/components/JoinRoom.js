
import React, { Component } from "react";

class JoinRoom extends Component{
    constructor() {
        super();
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form>
                            <label>What's your nickname?</label>
                            <input type="text"className="form-control" placeholder="Johnny Appleseed"/>
                            <label>Room Id?</label>
                            <input type="text" className="form-control" placeholder="3AD13-ZAD12-73AS1"/>
                        </form>
                        <button type="button" className="btn btn-secondary ml-1 mt-1">Help Guide</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default JoinRoom;