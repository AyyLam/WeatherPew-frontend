import React from 'react'

class ForecastItem extends React.Component {

  renderItems = () => {
     if (this.props.clickedFavCity.name) {
       console.log("success!")
      return (
        <div>
          <div className="city-name">{this.props.clickedFavCity.name}</div>
          <div className="info-country_code"> {this.props.clickedFavCity.state_code}, {this.props.clickedFavCity.country_code}</div>
          <div className="info-datetime">Time: {this.props.clickedFavCity.datetime}</div>
          <div className="info-temp">Now: {this.props.clickedFavCity.temp}ºF</div>
          <div className="info-maxTemp">High: {this.props.clickedFavCity.maxTemp}ºF</div>
          <div className="info-minTemp">Low: {this.props.clickedFavCity.minTemp}ºF</div>
          <div className="info-windSpd">Wind Speed: {this.props.clickedFavCity.wind_spd}mph</div>
          <div className="info-pop"> {this.props.clickedFavCity.pop}% Chance of Rain/Snow</div>
          <div className="info-pop">Relative Humidity: {this.props.clickedFavCity.rh}%</div>
        </div>
      )
    } else {
      return (<div>
        <div className="city-name">{this.props.data.city}</div>
        <div className="info"> {this.props.data.state_code}, {this.props.data.country_code}</div>
        <div className="info">{this.props.data.datetime}</div>
        <div className="info-Temp">Now: {this.props.data.temp}ºF</div>
        <div className="info-maxTemp">High: {this.props.data.maxTemp}ºF</div>
        <div className="info-minTemp">Low: {this.props.data.minTemp}ºF</div>
        <div className="info-windSpd">Wind Speed: {this.props.data.wind_spd}mph</div>
        <div className="info-pop">{this.props.data.pop}% Chance of Rain/Snow</div>
        <div className="info-rh">Relative Humidity: {this.props.data.rh}%</div>
      </div>)
    }

  }

  render () {
    console.log('fav city in FI:', this.props.clickedFavCity);
    console.log('fav city in FI with .city:', this.props.clickedFavCity.city);
    return (
      <div>{this.renderItems()}</div>
      )
  }



}

export default ForecastItem
