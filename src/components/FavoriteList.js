import React from 'react'
import FavoriteCity from './FavoriteCity'



const FavoriteList = (props) => {
  console.log('props.favedCity:', props.favedCity);
  const renderCities = () => {
    debugger;
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
