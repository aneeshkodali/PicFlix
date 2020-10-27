import React from "react";

class Chat extends React.Component{
    render(){
        return (
            <div>
                <div className="card-header">
                    <h5>Chat</h5>
                </div>
                <div className="card-body">
                    <hr/>
                    <div className="messages">
                        
                    </div>
                </div>
                <div className="card-footer">
                        <input type="text" placeholder="Message" className="form-control"/>
                        <br/>
                        <button className="btn btn-primary form-control">Send</button>
                </div>
            </div>
        );
    }
}

export default Chat;