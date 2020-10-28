import React from "react";
import { socket }  from '../Header/Header'

class Chat extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            username: '',
            massage: '',
            messages: []
        };

        this.sendMessage = ev =>
        {
            console.log(socket.roomid, "socketid");
            ev.preventDefault();
            socket.emit('chat message', {
                author: Math.random() * (1000 - 1),
                message: this.state.message,
                roomid: socket.roomname,
            });
            this.setState({message: ''})
        }

        socket.on("chat message receive", function(data)
        {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data)
            this.setState({messages: [...this.state.messages, data]});
        }
    }

    render(){
        return (
            <div>
                <div className="card-header">
                    <h5>Chat</h5>
                </div>
                <div className="card-body">
                    <hr/>
                    <div className="messages">
                        {this.state.messages.map(message =>{
                            return(
                            <div>{message.author}: {message.message}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="card-footer">
                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                    <br/>
                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                </div>
            </div>
        );
    }
}

export default Chat;