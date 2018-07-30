import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from './components/Nav'
import User from './components/User'
import Login from './components/Login'

class App extends Component {

  state = {
    user: ""
  }

  handleLogin = (name) => {
    this.setState({
      user: name
    })

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Nav name={this.state.user}/>
        <Switch>
          <Route path="/login" render={() => {
            return <Login handleLogin={this.handleLogin} user={this.state.user}/>
          }} />
          <Route path="/John" render={() => {
            return  <User user={this.state.user}/>
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
