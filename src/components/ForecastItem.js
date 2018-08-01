import React from 'react'

class ForecastItem extends React.Component {

  render () {
    return (
      <div>
        <div className="city-name">{this.props.data.city}</div>
        <div className="info"> {this.props.data.state_code}, {this.props.data.country_code}</div>
        <div className="info">{this.props.data.datetime}</div>
        <div className="info-Temp">Now: {this.props.data.temp}ºF</div>
        <div className="info-maxTemp">High: {this.props.data.maxTemp}ºF</div>
        <div className="info-minTemp">Low: {this.props.data.minTemp}ºF</div>
        <div className="info-windSpd">Wind Speed: {this.props.data.wind_spd}mph</div>
        <div className="info-pop">{this.props.data.pop}% Chance of Rain/Snow</div>
        <div className="info-rh">Rel. Humidity {this.props.data.rh}%</div>
      </div>
      )
  }



}

export default ForecastItem
