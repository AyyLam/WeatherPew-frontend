import React from 'react'
import FavoriteCity from './FavoriteCity'
import { Link } from 'react-router-dom'




class FavoriteList extends React.Component {


   renderCities = () => {
    return this.props.favedCity.map((city) => {
      return <div><div ></div>   <FavoriteCity name={city.name} city={city} favCityPage={this.props.favCityPage} maxTemp={city.maxTemp} id={city.id} clickedFavCity={this.props.clickedFavCity} /> </div>
    })
  }
  render() {
    return(
      <div className="grid-container">
        {this.renderCities()}
      </div>
    )
  }
}
export default FavoriteList
