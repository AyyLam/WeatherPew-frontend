import React from 'react'
import CityPage from './CityPage'
import SearchInput from './SearchInput'
import FavoriteList from './FavoriteList'
import getWeather from '../adapter/adapter.js'


export default class User extends React.Component {
  state = {
    searchedCity: "",
    clickedCity: "",
    data: []
  }

  componentDidMount(){

  }

  handleClick = (city) => {
    this.setState({
      searchedCity: city
    }, () => getWeather(this.state.searchedCity)
      .then(data => {
        this.setState({
          data
        })
      }))

  }


  render(){
    console.log('data:', this.state.data, this.state.searchedCity)

    return(
      <div>
      <SearchInput handleClick={this.handleClick} />
      <FavoriteList data={this.state.data}/>
      </div>
    )
  }
}

{/*class User extends React.Component {

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
*/}
