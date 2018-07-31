import React from 'react'
import { Link } from 'react-router-dom'


const FavoriteCity = (props) => {

  return(
    //iterate through user.cities to render fav cities
    <div >
      <Link to='/city' onClick={console.log}>
      <div className="city-name-fl">{props.name}</div>
    </Link>
      <div className="info-maxTemp-fl">{props.maxTemp}</div>
    </div>
  )
}
export default FavoriteCity
