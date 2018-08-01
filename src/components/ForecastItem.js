import React from 'react'

class ForecastItem extends React.Component {

  render () {
    return (
      <div>
        <div className="city-name">{this.props.data.city}</div>
        <div className="info-country_code"> {this.props.data.state_code}, {this.props.data.country_code}</div>
        <div className="info-datetime">Time: {this.props.data.datetime}</div>
        <div className="info-temp">Now: {this.props.data.temp}ºF</div>
        <div className="info-maxTemp">High: {this.props.data.maxTemp}ºF</div>
        <div className="info-minTemp">Low: {this.props.data.minTemp}ºF</div>
        <div className="info-windSpd">Wind Speed: {this.props.data.wind_spd}mph</div>
        <div className="info-pop">Rain? {this.props.data.pop}%</div>
        <div className="info-pop">Relative Humidity: {this.props.data.rh}%</div>
      </div>
      )
  }



}

export default ForecastItem
