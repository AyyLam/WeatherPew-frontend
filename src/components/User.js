import React from 'react'
import CityPage from './CityPage'
import SearchInput from './SearchInput'
import FavoriteList from './FavoriteList'

class User extends React.Component {

  state = {
    favedCity: "", // From clicking the fav button
    searchedCity: "" //From search Input
  }

  addFavedCity = (data) => {
    this.setState({
      favedCity: data
    })
  }
  render () {
    return (
      <div>
        <CityPage city={this.state.searchedCity} addFavedCity={this.addFavedCity}/>
      </div>
      )
  }



}

export default User
