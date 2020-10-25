import React, { Component } from "react";
import './app.css';
import { Header } from './global/header';
import { Switch, Route} from 'react-router-dom';

import CreateRoom from './main/createRoom';
import JoinRoom from './main/createRoom';


class App extends Component{
    render(){
        return(
        <div>
            <Header/>
            <Switch>
                <Route exact path="/join-room" component={CreateRoom}/>
                <Route exact path="/create-room" component={JoinRoom}/>
            </Switch>
        </div>
        );
    }
}

export default App;