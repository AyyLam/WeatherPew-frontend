import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import User from './components/User'
import Login from './components/Login'
import getWeather from './adapter/adapter.js'
import CityPage from './components/CityPage.js'
import SearchInput from './components/SearchInput.js'
import { Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {

  state = {
    user: "",
    searchedCity: "",
    clickedFavCity: "",
    favedCity: [], // From clicking the fav button
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
    this.props.history.push('/user')
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
          })
        }
      })
    )
    this.props.history.push('/city')
  }


    addFavedCity = (data) => {
      this.setState({
        favedCity: [...this.state.favedCity, data]
      })
      this.props.history.push('/user')
    }

    //pass down method to handle favorite city click that redorects to city page

  render() {
    console.log(this.state.favedCity);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Nav name={this.state.user}/>
        {this.state.user ? <SearchInput handleClick={this.handleClick} /> : null}
        <Switch>

        {// {this.state.user ? <User user={this.state.user} handleClick={this.handleClick} data={this.state.data}/> && <SearchInput handleClick={this.handleClick} /> : <Login handleLogin={this.handleLogin} user={this.state.user}/>}
        // {this.state.data.city ?  : <SearchInput handleClick={this.handleClick} />}
      }
        <Route path="/login" render={() => {
            return <Login handleLogin={this.handleLogin} user={this.state.user}/>
          }} />
        <Route path="/user" render={(routerProps) => {
            routerProps.match.params.username
            return  <User user={this.state.user} favedCity={this.state.favedCity} clickedFavCity={this.state.clickedFavCity}/>
          }} />
        <Route path='/city' render={() => {
            return <CityPage city={this.state.searchedCity} addFavedCity={this.addFavedCity} weatherData={this.state.data}/> }}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
