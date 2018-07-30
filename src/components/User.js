import React from 'react'
import FavoriteList from './FavoriteList'


export default class User extends React.Component {
  

  render(){
    console.log('data:', this.state.data, this.state.searchedCity)
    return(
      <div>
      User page
      <FavoriteList data={this.props.data} favedCity={this.props.favedCity}/>
      </div>
    )
  }
}
