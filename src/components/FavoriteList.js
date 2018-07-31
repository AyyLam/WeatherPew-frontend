import React from 'react'
import FavoriteCity from './FavoriteCity'



const FavoriteList = (props) => {
  const renderCities = () => {
    return props.favedCity.map((city) => {
      return <FavoriteCity name={city.city} maxTemp={city.maxTemp} clickedFavCity={props.clickedFavCity}/>
    })
  }
  return(
    <div>
      {renderCities()}
    </div>
  )
}
export default FavoriteList
