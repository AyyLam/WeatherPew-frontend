import React from 'react'
import { Link } from 'react-router-dom'


class FavoriteCity extends React.Component {


  handleRedirect = () => {
   this.props.favCityPage(this.props.city)

 }


  render(){

    return(
      <div className="city-name-fl" >
        <Link to={`/city/${this.props.city.id}`} onClick={this.handleRedirect}>{this.props.city.name}</Link>
        <div className="info-fl"> {this.props.state_code}, {this.props.city.country_code}</div>
        <div className="info-fl">{this.props.city.datetime}</div>
        <div className="info-Temp-fl">Now: {this.props.city.temp}ºF</div>
        <div className="info-maxTemp-fl">High: {this.props.city.maxTemp}ºF</div>
        <div className="info-minTemp-fl">Low: {this.props.city.minTemp}ºF</div>
      </div>
    )
  }

}
export default FavoriteCity
