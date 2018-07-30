import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <Login handleLogin={this.handleLogin} user={this.state.user}/>
        <User user={this.props.user}/>
      </div>
    );
  }
}

export default App;
