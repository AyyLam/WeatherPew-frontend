import React from 'react'
import FavoriteCity from './FavoriteCity'
import { Link } from 'react-router-dom'




const FavoriteList = (props) => {
  const renderCities = () => {
    return props.favedCity.map((city) => {
      return <div><Link to={`/city/${city.id}`}>{city.name}</Link> <FavoriteCity name={city.name} favCityPage={props.favCityPage} maxTemp={city.maxTemp} key={city.id} clickedFavCity={props.clickedFavCity} /></div>  
    })
  }

  return(
    <div>
      {renderCities()}
    </div>
  )
}
export default FavoriteList
