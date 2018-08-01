import React from 'react'
import { Link } from 'react-router-dom'


class FavoriteCity extends React.Component {


  handleRedirect = () => {
   this.props.favCityPage(this.props.city)

 }


  render(){

    return(
      <div className="city-name-fl" >
        <Link to={`/city/${this.props.id}`} onClick={this.handleRedirect}>{this.props.city.name}</Link>
      {/*<div>{this.props.name}</div>*/}

        <div className="info-maxTemp-fl">{this.props.city.maxTemp}</div>
      </div>
    )
  }

}
export default FavoriteCity
