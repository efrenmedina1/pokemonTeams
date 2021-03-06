import React, { Component } from "react";
import NavBar from "./home/Navbar";
import Auth from './Auth/Auth';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: '' 
      
    }
  }

componentWillMount() {
    const token = sessionStorage.getItem('token');
    if (token && !this.state.sessionToken) {   
      this.setState({ sessionToken: token });
    }
}

setSessionState = (token) => {
    sessionStorage.setItem('token', token); 
    this.setState({ sessionToken: token });
}

logout = () => {
  this.setState({ 
    sessionToken: '', 
  });
  sessionStorage.clear();
  localStorage.clear();
}

protectedViews = () => {
  if (this.state.sessionToken === sessionStorage.getItem('token')) {
    return (
      <Switch>
        <Route path='/' exact>
          <Splash sessionToken={this.state.sessionToken} />
        </Route>
      </Switch>
    )
  } else {
    return (
      <Route path="/auth" >
        <Auth setToken={this.setSessionState}/>
      </Route>
    )
  }
}

render() {
  return (
    <Router>
      <div>
        <NavBar clickLogout={this.logout} />
        {this.protectedViews()}
      </div>
    </Router>

  );
}
}

export default App;