import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import User from './components/User'
import Login from './components/Login'
import getWeather from './adapter/adapter.js'
import CityPage from './components/CityPage.js'
import SearchInput from './components/SearchInput.js'




class App extends Component {

  state = {
    user: "",
    searchedCity: "",
    favedCity: "", // From clicking the fav button
    data: {
      city: '',
      maxTemp: "",
      minTemp: ''
    }
  }

  handleLogin = (name) => {
    this.setState({
      user: name
    })

  }

  handleClick = (city) => {
    this.setState({
      searchedCity: city
    }, () => getWeather(this.state.searchedCity)
      .then(weather => {
        console.log('weather:', weather.status);
        if (weather.status) {
          alert("Bad call")
        } else {
          this.setState({
          data: {
            city: weather.city_name,
            maxTemp: weather.data[0].max_temp,
            minTemp: weather.data[0].min_temp
          }
        })}
      }))
  }


    addFavedCity = (data) => {
      this.setState({
        favedCity: data
      })
    }



  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Nav name={this.state.user}/>
        {this.state.user ? <User user={this.state.user} handleClick={this.handleClick} data={this.state.data}/> && <SearchInput handleClick={this.handleClick} /> : <Login handleLogin={this.handleLogin} user={this.state.user}/>}
        {this.state.data.city ? <CityPage city={this.state.searchedCity} addFavedCity={this.addFavedCity} weatherData={this.state.data}/> : <SearchInput handleClick={this.handleClick} />}

        {/*<Switch>
          <Route path="/login" render={() => {
            return <Login handleLogin={this.handleLogin} user={this.state.user}/>
          }} />
          <Route path="/John" render={() => {
            return  <User user={this.state.user}/>
          }} />
      </Switch>*/}
      </div>
    );
  }
}

export default App;
