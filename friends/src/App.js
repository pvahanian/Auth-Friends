import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Link to= "/login"> Login</Link>
      <Link to="/protected">FriendsList</Link>
      <Switch>
      <PrivateRoute exact path="/protected" component={FriendsList} />  
      {/* //Only if you have the token are you allowed to access this protected path */}
        
        <Route path="/login" component={Login}/>
        {/* Anyone can access this page even if you dont have a token */}
        {/* <Route path="/tester" component={Login}/> */}
        {/* Ziggs questions right here.  This is the megaBOMB!  */}
      </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
