import React, { Component } from "react";
import './app.css';
import { Header } from './global/header';
import { Switch, Route} from 'react-router-dom';

import CreateRoom from './main/createRoom';
import JoinRoom from './main/joinRoom';


class App extends Component{
    render(){
        return(
        <div>
            <Header/>
            <Switch>
                <Route exact path="/join-room" component={JoinRoom}/>
                <Route exact path="/create-room" component={CreateRoom}/>
            </Switch>
        </div>
        );
    }
}

export default App;