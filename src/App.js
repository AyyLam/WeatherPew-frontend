import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import User from './components/User'
import Login from './components/Login'
import { getWeather, createUser, createCity, createCityUser } from './adapter/adapter.js'
import CityPage from './components/CityPage.js'
import SearchInput from './components/SearchInput.js'
import { Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {

  state = {
    user: {
      name: "",
      id: ""
    },
    searchedCity: "",
    clickedFavCity: "",
    favedCity: [],
    data: {
      city: '',
      id: '',
      maxTemp: "",
      minTemp: ''
    }
  }

  handleLogin = (name) => {
    this.setState({
      user: {
        name: name
      }
    }, () => createUser(this.state.user)
    .then(data => {
      console.log('createuser:', data)
      this.setState({
        user: {
          name: data.user.username,
          id: data.user.id
        },
        favedCity: data.cities
      })
    })
  )
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
          }, () => createCity(this.state.data)
            .then(data => {
              console.log('increatecitypromise:', data);
              // debugger
              this.setState({
              data: {
                city: data.name,
                id: data.id,
                maxTemp: data.maxTemp,
                minTemp: data.minTemp
              }
            }
            )}
          ))
        }
      })
    )
    this.props.history.push('/city');
  }

    addFavedCity = (data) => {
      createCity(data)
        .then(data => {
          console.log('infavedcitypromise:', data);
          if (this.state.favedCity.map((city) => data.name === city.name)) {
            alert('This city is already in your favorites!')
          } else {
          this.setState({
            favedCity: [...this.state.favedCity, data]
          }, () => createCityUser(this.state.data, this.state.user)
          )}
        }
      )
      this.props.history.push('/user')
    }


    //pass down method to handle favorite city click that redorects to city page

  render() {
    console.log('city:', this.state.data);
    console.log('user:', this.state.user);
    console.log('favedcities:', this.state.favedCity);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Nav user={this.state.user}/>
        {this.state.user.name ? <SearchInput handleClick={this.handleClick} /> : null}
        <Switch>
        <Route path="/login" render={() => {
            return <Login handleLogin={this.handleLogin} />
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
