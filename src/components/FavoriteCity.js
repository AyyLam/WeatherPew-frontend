import React from 'react'
import { Link } from 'react-router-dom'


class FavoriteCity extends React.Component {


  handleRedirect = () => {
   this.props.favCityPage(this.props.city)

 }


  render(){

    return(
      <div className="city-name-fl" >
        <Link to={`/city/${this.props.id}`} onClick={this.handleRedirect}>{this.props.name}</Link>
        <div className="info-fl"> {this.props.state_code}, {this.props.country_code}</div>
        <div className="info-fl">{this.props.datetime}</div>
        <div className="info-Temp-fl">Now: {this.props.temp}ºF</div>
        <div className="info-maxTemp-fl">High: {this.props.maxTemp}ºF</div>
        <div className="info-minTemp-fl">Low: {this.props.minTemp}ºF</div>
      </div>
    )
  }

}
export default FavoriteCity
