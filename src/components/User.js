import React from 'react'
import FavoriteList from './FavoriteList'


export default class User extends React.Component {


  render(){
    return(
      <div className="favedCityTitle">
      My Favorite Cities
      <FavoriteList data={this.props.data} favedCity={this.props.favedCity} favCityPage={this.props.favCityPage}/>
      </div>
    )
  }
}
