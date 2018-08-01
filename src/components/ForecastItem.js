import React from 'react'

class ForecastItem extends React.Component {

  render () {
    return (
      <div>
        <div className="city-name">{this.props.data.city}</div>
        <div className="info-maxTemp">High: {this.props.data.maxTemp}</div>
        <div className="info-minTemp">Low: {this.props.data.maxTemp}</div>
      </div>
      )
  }



}

export default ForecastItem
