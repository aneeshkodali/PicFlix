import React, { Component } from "react";
import './App.css';
import { Header } from './Header';
import { Switch, Route} from 'react-router-dom';

import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Game from './game';


class App extends Component{
    render(){
        return(
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Game} />
                <Route exact path="/join-room" component={JoinRoom}/>
                <Route exact path="/create-room" component={CreateRoom}/>
            </Switch>
        </div>
        );
    }
}

export default App;