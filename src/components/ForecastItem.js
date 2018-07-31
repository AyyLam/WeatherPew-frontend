import React from 'react'

class ForecastItem extends React.Component {

  render () {
    return (
      <div>
        <div class="city-name">{this.props.data.city}</div>
        <div class="info-maxTemp">High: {this.props.data.maxTemp}</div>
        <div class="info-minTemp">Low: {this.props.data.maxTemp}</div>
      </div>
      )
  }



}

export default ForecastItem
