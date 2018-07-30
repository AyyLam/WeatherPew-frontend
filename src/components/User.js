import React from 'react'
import FavoriteList from './FavoriteList'


export default class User extends React.Component {


  render(){
    console.log(this.props.data, this.props.searchedCity)
    return(
      <div>
      User page
      <FavoriteList data={this.props.data} favedCity={this.props.favedCity}/>
      </div>
    )
  }
}
